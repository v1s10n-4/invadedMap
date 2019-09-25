const fs = require('fs');
const { DOMParser } = require('htmldom2');

console.log(`scraping page: ${process.env.PAGE}`);

const html = fs.readFileSync(`page${process.env.PAGE}.html`, {encoding: 'utf8'});
const document = new DOMParser().parseFromString(html, 'text/html');

const lines = document.documentElement.querySelectorAll('tr.haut').map((tr, i) => {
	const date = tr.childNodes['1'].querySelector('font').childNodes['8'];
	console.log(`found: 👾${tr.childNodes['1'].querySelector('font').firstChild.firstChild.data.split('[')[0].slice(0, -1)}!`);
	return {
		name: tr.childNodes['1'].querySelector('font').firstChild.firstChild.data.split('[')[0].slice(0, -1),
		images: tr.querySelectorAll('img:not(.banniere)').map(x => x.attributes['0'].value),
		state: tr.childNodes['1'].querySelector('font').childNodes['6'].data.substr(1),
		reportDate: date ? date.data.split(' ')[5] : '',
		city: tr.childNodes['1'].querySelector('font').childNodes['2'].data.slice(1, -1),
		points: tr.childNodes['1'].querySelector('font').firstChild.firstChild.data.split('[')[1].slice(0, -5)
	}
});

let json = JSON.parse(fs.readFileSync('./db.json', {encoding: 'utf8'}));
json = [...json, ...lines];
fs.writeFileSync('./db.json', JSON.stringify(json));
console.log(`page: ${process.env.PAGE} writed in db`);