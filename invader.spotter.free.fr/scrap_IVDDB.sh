#!/usr/bin/env bash

echo "[]" > db.json
for i in {1..74}
do
  curl 'http://invader.spotter.free.fr/listing.php' -H 'Connection: keep-alive' -H 'Cache-Control: max-age=0' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36' -H 'Origin: http://invader.spotter.free.fr' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3' -H 'Referer: http://invader.spotter.free.fr/recherche.php' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' -H 'Cookie: PHPSESSID=92cb2d58ad3181b5d6e3b2f9eeb679f1' --data "toutlieu=on&BRL=on&FKF=on&KLN=on&MLB=on&PRT=on&WN=on&DHK=on&ANVR=on&BXL=on&CHAR=on&RDU=on&BT=on&GRU=on&SP=on&HK=on&DJN=on&BRC=on&BBO=on&MLGA=on&MEN=on&LA=on&MIA=on&NY=on&SD=on&AIX=on&AVI=on&BTA=on&CAPF=on&CLR=on&CON=on&CAZ=on&DIJ=on&FRQ=on&GRN=on&LCT=on&LIL=on&LBR=on&LY=on&MARS=on&MTB=on&MPL=on&NA=on&NIM=on&PAU=on&PRP=on&RN=on&TLS=on&VMRL=on&VRS=on&LDN=on&MAN=on&NCL=on&VRN=on&ELT=on&RA=on&ROM=on&TK=on&MBSA=on&MRAK=on&RBA=on&CCU=on&KAT=on&AMS=on&NOO=on&RTD=on&FAO=on&LJU=on&HALM=on&VSB=on&ANZR=on&BSL=on&BRN=on&GNV=on&LSN=on&GRTI=on&BGK=on&IST=on&prs=on&toutparis=on&PA01=on&PA02=on&PA03=on&PA04=on&PA05=on&PA06=on&PA07=on&PA08=on&PA09=on&PA10=on&PA11=on&PA12=on&PA13=on&PA14=on&PA15=on&PA16=on&PA17=on&PA18=on&PA19=on&PA20=on&PA77=on&PA92=on&PA93=on&PA94=on&numero=0-9999&noidentifie=on&choixmotif=ou&choixfond=ou&couleurmotif=0000000000000000000&couleurfond=0000000000000000000&x=104&y=26&page=$i&arrondissement=00" --compressed --insecure --silent > "page$i.html"
  echo "download page: $i"
  export PAGE=$i
  node scrap_IVDDB.js;
  rm "page$i.html"
done

echo "✅ Done ✅"

#curl 'http://invader.spotter.free.fr/listing.php'
#-H 'Connection: keep-alive'
#-H 'Cache-Control: max-age=0'
#-H 'Upgrade-Insecure-Requests: 1'
#-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36'
#-H 'Origin: http://invader.spotter.free.fr'
#-H 'Content-Type: application/x-www-form-urlencoded'
#-H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
#-H 'Referer: http://invader.spotter.free.fr/recherche.php'
#-H 'Accept-Encoding: gzip, deflate'
#-H 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7'
#-H 'Cookie: PHPSESSID=92cb2d58ad3181b5d6e3b2f9eeb679f1'
#--data "toutlieu=on
#&BRL=on
#&FKF=on
#&KLN=on
#&MLB=on
#&PRT=on
#&WN=on
#&DHK=on
#&ANVR=on
#&BXL=on
#&CHAR=on
#&RDU=on
#&BT=on
#&GRU=on
#&SP=on
#&HK=on
#&DJN=on
#&BRC=on
#&BBO=on
#&MLGA=on
#&MEN=on
#&LA=on
#&MIA=on
#&NY=on
#&SD=on
#&AIX=on
#&AVI=on
#&BTA=on
#&CAPF=on
#&CLR=on
#&CON=on
#&CAZ=on
#&DIJ=on
#&FRQ=on
#&GRN=on
#&LCT=on
#&LIL=on
#&LBR=on
#&LY=on
#&MARS=on
#&MTB=on
#&MPL=on
#&NA=on
#&NIM=on
#&PAU=on
#&PRP=on
#&RN=on
#&TLS=on
#&VMRL=on
#&VRS=on
#&LDN=on
#&MAN=on
#&NCL=on
#&VRN=on
#&ELT=on
#&RA=on
#&ROM=on
#&TK=on
#&MBSA=on
#&MRAK=on
#&RBA=on
#&CCU=on
#&KAT=on
#&AMS=on
#&NOO=on
#&RTD=on
#&FAO=on
#&LJU=on
#&HALM=on
#&VSB=on
#&ANZR=on
#&BSL=on
#&BRN=on
#&GNV=on
#&LSN=on
#&GRTI=on
#&BGK=on
#&IST=on
#&prs=on
#&toutparis=on
#&PA01=on
#&PA02=on
#&PA03=on
#&PA04=on
#&PA05=on
#&PA06=on
#&PA07=on
#&PA08=on
#&PA09=on
#&PA10=on
#&PA11=on
#&PA12=on
#&PA13=on
#&PA14=on
#&PA15=on
#&PA16=on
#&PA17=on
#&PA18=on
#&PA19=on
#&PA20=on
#&PA77=on
#&PA92=on
#&PA93=on
#&PA94=on
#&numero=0-9999
#&noidentifie=on
#&choixmotif=ou
#&choixfond=ou
#&couleurmotif=0000000000000000000
#&couleurfond=0000000000000000000
#&x=104
#&y=26
#&page=$i
#&arrondissement=00"
#--compressed --insecure --silent