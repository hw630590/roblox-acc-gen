const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');
const crypto = require('crypto');

const proxy = 'socks5://87.106.52.7:6400'; // replace with your socks5 proxy (e.g. 'socks5://127.0.0.1:9050' or 'socks5://user:pass@host:port')
const agent = new SocksProxyAgent(proxy);

// The code is obfuscated to prevent reverse engineering and skidding. If you want to modify the code, you should deobfuscate it first.
// If you want to use the code, please credit me.
// If you have any questions, please contact me on Discord: bingorehagey

function generateKeyPair() {
  const _0x5daebc=_0x50ff;function _0x50ff(_0x26e9b5,_0x2b7ee6){const _0x139df7=_0x139d();return _0x50ff=function(_0x50ff61,_0x370500){_0x50ff61=_0x50ff61-0xa3;let _0x1e9c2e=_0x139df7[_0x50ff61];return _0x1e9c2e;},_0x50ff(_0x26e9b5,_0x2b7ee6);}(function(_0x10a064,_0x1a1a70){const _0x26f65c=_0x50ff,_0x8a76e8=_0x10a064();while(!![]){try{const _0x41e16c=-parseInt(_0x26f65c(0xa9))/0x1*(-parseInt(_0x26f65c(0xac))/0x2)+-parseInt(_0x26f65c(0xa7))/0x3+-parseInt(_0x26f65c(0xa4))/0x4*(parseInt(_0x26f65c(0xa6))/0x5)+parseInt(_0x26f65c(0xa5))/0x6+-parseInt(_0x26f65c(0xaa))/0x7+-parseInt(_0x26f65c(0xa3))/0x8+parseInt(_0x26f65c(0xad))/0x9;if(_0x41e16c===_0x1a1a70)break;else _0x8a76e8['push'](_0x8a76e8['shift']());}catch(_0x2a263a){_0x8a76e8['push'](_0x8a76e8['shift']());}}}(_0x139d,0x3f33a));const {publicKey,privateKey}=crypto['generateKeyPairSync']('ec',{'namedCurve':'prime256v1','publicKeyEncoding':{'type':_0x5daebc(0xab),'format':'pem'},'privateKeyEncoding':{'type':'pkcs8','format':_0x5daebc(0xa8)}});return{'publicKey':publicKey,'privateKey':privateKey};function _0x139d(){const _0xb508c2=['37545VTequw','1443141nQPhvy','pem','11433QGMZou','2250444helbon','spki','66MJUzUZ','10328400WOFzmD','3328256wpXgTr','268WUejpm','2733954GqtSdv'];_0x139d=function(){return _0xb508c2;};return _0x139d();}
}

function signNonce(privateKey, serverNonce) {
  function _0x1f94(){const _0x3e7bad=['update','end','600usLvLr','sign','SHA256','5309016ZlPjQI','20LGdNgV','toString','594626pDLpQJ','531456MwkCZU','9oXypuD','33275cSPlnv','2047171TpcoKB','33918HcWgVn','15vJnFTj','4918903VfFfQm'];_0x1f94=function(){return _0x3e7bad;};return _0x1f94();}const _0x5a483d=_0x2ed9;(function(_0x39481f,_0x55f003){const _0x13fced=_0x2ed9,_0x42d671=_0x39481f();while(!![]){try{const _0x5370ac=-parseInt(_0x13fced(0x6a))/0x1+-parseInt(_0x13fced(0x65))/0x2*(-parseInt(_0x13fced(0x6b))/0x3)+parseInt(_0x13fced(0x66))/0x4+-parseInt(_0x13fced(0x68))/0x5*(parseInt(_0x13fced(0x6f))/0x6)+-parseInt(_0x13fced(0x69))/0x7+parseInt(_0x13fced(0x72))/0x8*(-parseInt(_0x13fced(0x67))/0x9)+parseInt(_0x13fced(0x73))/0xa*(parseInt(_0x13fced(0x6c))/0xb);if(_0x5370ac===_0x55f003)break;else _0x42d671['push'](_0x42d671['shift']());}catch(_0x37e454){_0x42d671['push'](_0x42d671['shift']());}}}(_0x1f94,0xd18a5));function _0x2ed9(_0x2ed1f8,_0xfac5ee){const _0x1f946c=_0x1f94();return _0x2ed9=function(_0x2ed90c,_0x4b0683){_0x2ed90c=_0x2ed90c-0x65;let _0x2728f2=_0x1f946c[_0x2ed90c];return _0x2728f2;},_0x2ed9(_0x2ed1f8,_0xfac5ee);}const sign=crypto['createSign'](_0x5a483d(0x71));sign[_0x5a483d(0x6d)](serverNonce),sign[_0x5a483d(0x6e)]();return sign[_0x5a483d(0x70)](privateKey)[_0x5a483d(0x74)]('base64');
}

async function getCsrfToken() {
  const _0x41b933=_0x3c0d;(function(_0x287cf5,_0xd9df1d){const _0x35c529=_0x3c0d,_0x480ce8=_0x287cf5();while(!![]){try{const _0x212464=-parseInt(_0x35c529(0x82))/0x1+-parseInt(_0x35c529(0x7c))/0x2+-parseInt(_0x35c529(0x8a))/0x3*(parseInt(_0x35c529(0x81))/0x4)+parseInt(_0x35c529(0x86))/0x5+parseInt(_0x35c529(0x84))/0x6*(parseInt(_0x35c529(0x8d))/0x7)+-parseInt(_0x35c529(0x88))/0x8+parseInt(_0x35c529(0x83))/0x9;if(_0x212464===_0xd9df1d)break;else _0x480ce8['push'](_0x480ce8['shift']());}catch(_0x166827){_0x480ce8['push'](_0x480ce8['shift']());}}}(_0x70dc,0x8f537));try{await axios[_0x41b933(0x87)](_0x41b933(0x8c),{'username':_0x41b933(0x80),'password':_0x41b933(0x7d)},{'httpsAgent':agent});}catch(_0x129667){if(_0x129667[_0x41b933(0x8b)]&&_0x129667[_0x41b933(0x8b)][_0x41b933(0x89)][_0x41b933(0x7e)]){const token=_0x129667['response'][_0x41b933(0x89)]['x-csrf-token'];return console[_0x41b933(0x7f)]('[+]\x20Got\x20CSRF\x20token:',token),token;}throw new Error(_0x41b933(0x85));}function _0x3c0d(_0x35ae06,_0x55d3dd){const _0x70dc09=_0x70dc();return _0x3c0d=function(_0x3c0d92,_0x291cd8){_0x3c0d92=_0x3c0d92-0x7c;let _0x88899a=_0x70dc09[_0x3c0d92];return _0x88899a;},_0x3c0d(_0x35ae06,_0x55d3dd);}function _0x70dc(){const _0x1ff1d6=['6844134GLXOnJ','Could\x20not\x20get\x20CSRF\x20token','2642670akSbsg','post','1747784ZuFGyS','headers','412314cIgKRj','response','https://auth.roblox.com/v2/passwords/validate','7oyxwms','1005848HVdlRE','k0hauM4D31N-ch!N4','x-csrf-token','log','KohauMadeInChina','12FWsckJ','118299noShtI','1528650dOGoYU'];_0x70dc=function(){return _0x1ff1d6;};return _0x70dc();}
}

function decodeServerNonce(serverNonce) {
  function _0x3590(_0x2b3c05,_0x4acb88){const _0xa12792=_0xa127();return _0x3590=function(_0x3590bd,_0x3435f4){_0x3590bd=_0x3590bd-0x1c8;let _0x3eb75a=_0xa12792[_0x3590bd];return _0x3eb75a;},_0x3590(_0x2b3c05,_0x4acb88);}const _0x576851=_0x3590;(function(_0x4b14c8,_0x499d34){const _0x2d1d48=_0x3590,_0x13858c=_0x4b14c8();while(!![]){try{const _0x3edd27=parseInt(_0x2d1d48(0x1cc))/0x1*(parseInt(_0x2d1d48(0x1d6))/0x2)+-parseInt(_0x2d1d48(0x1cd))/0x3+-parseInt(_0x2d1d48(0x1c8))/0x4*(-parseInt(_0x2d1d48(0x1d0))/0x5)+-parseInt(_0x2d1d48(0x1ca))/0x6*(parseInt(_0x2d1d48(0x1d5))/0x7)+parseInt(_0x2d1d48(0x1da))/0x8*(parseInt(_0x2d1d48(0x1d1))/0x9)+-parseInt(_0x2d1d48(0x1d8))/0xa+parseInt(_0x2d1d48(0x1c9))/0xb;if(_0x3edd27===_0x499d34)break;else _0x13858c['push'](_0x13858c['shift']());}catch(_0x434b41){_0x13858c['push'](_0x13858c['shift']());}}}(_0xa127,0xa7209));function _0xa127(){const _0x26e810=['toString','5592220ySiMRq','split','27576mJeKxs','29296hzGNxf','13380697BIZEyZ','6zKeHfa','base64','1CmMlXK','2476626BnfDpw','[+]\x20Nonce\x20Value:','replace','670WTRqKL','2718gSWwAG','utf8','[!]\x20Invalid\x20JWT\x20format','nonce','9373567kznKYC','339122PMzLND'];_0xa127=function(){return _0x26e810;};return _0xa127();}const parts=serverNonce[_0x576851(0x1d9)]('.');if(parts['length']<0x2)throw new Error(_0x576851(0x1d3));const payloadJson=Buffer['from'](parts[0x1][_0x576851(0x1cf)](/-/g,'+')[_0x576851(0x1cf)](/_/g,'/'),_0x576851(0x1cb))[_0x576851(0x1d7)](_0x576851(0x1d2)),payload=JSON['parse'](payloadJson);console['log'](_0x576851(0x1ce),payload[_0x576851(0x1d4)]);return payload['nonce'];
}

async function getServerNonce(csrfToken) {
  const _0x5085b9=_0x3d53;(function(_0x13d20d,_0x210fa3){const _0x38ddf2=_0x3d53,_0x361856=_0x13d20d();while(!![]){try{const _0x20d597=parseInt(_0x38ddf2(0x113))/0x1*(parseInt(_0x38ddf2(0x10c))/0x2)+-parseInt(_0x38ddf2(0x108))/0x3*(-parseInt(_0x38ddf2(0x115))/0x4)+-parseInt(_0x38ddf2(0x10a))/0x5*(parseInt(_0x38ddf2(0x116))/0x6)+-parseInt(_0x38ddf2(0x10e))/0x7*(parseInt(_0x38ddf2(0x110))/0x8)+-parseInt(_0x38ddf2(0x118))/0x9+parseInt(_0x38ddf2(0x109))/0xa*(-parseInt(_0x38ddf2(0x10d))/0xb)+parseInt(_0x38ddf2(0x112))/0xc;if(_0x20d597===_0x210fa3)break;else _0x361856['push'](_0x361856['shift']());}catch(_0xa78ab4){_0x361856['push'](_0x361856['shift']());}}}(_0x52ab,0x36515));function _0x52ab(){const _0x43ce7a=['6869052jALjIk','2uMLsgi','stringify','8vzlaHB','282282eeDSak','data','3416400hijWip','application/json','382587DmIZdm','10xeyXgG','15rzdEvg','string','234862OPQrKW','890142MPZgmJ','2191zFleGV','status','6088IZZkci','text'];_0x52ab=function(){return _0x43ce7a;};return _0x52ab();}const res=await axios['get']('https://apis.roblox.com/hba-service/v1/getServerNonce',{'headers':{'X-CSRF-TOKEN':csrfToken,'Accept':_0x5085b9(0x119)},'httpsAgent':agent,'responseType':_0x5085b9(0x111)});if(!res['data']||typeof res['data']!==_0x5085b9(0x10b))throw new Error('Unexpected\x20response:\x20'+res[_0x5085b9(0x10f)]+'\x20'+JSON[_0x5085b9(0x114)](res[_0x5085b9(0x117)]));function _0x3d53(_0x27d401,_0x26757c){const _0x52aba4=_0x52ab();return _0x3d53=function(_0x3d53fd,_0x25d164){_0x3d53fd=_0x3d53fd-0x108;let _0x209e04=_0x52aba4[_0x3d53fd];return _0x209e04;},_0x3d53(_0x27d401,_0x26757c);}const nonce=decodeServerNonce(res[_0x5085b9(0x117)]);return nonce;
}

function generateUsername() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length: 10 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
}

function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  return Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function generateRandomBirthday() {
  const start = new Date(1970, 0, 1);
  const end = new Date(1995, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString();
}

(async () => {
  try {
    const csrfToken = await getCsrfToken();
    const nonceValue = await getServerNonce(csrfToken);

    const { privateKey } = generateKeyPair();
    const signature = signNonce(privateKey, nonceValue);
    console.log('[+] Generated signature:', signature);
    
    const username = generateUsername();
    const password = generatePassword();

    const response = await axios.post(
      'https://auth.roblox.com/v2/signup',
      {
        agreementIds: [
          "306cc852-3717-4996-93e7-086daafd42f6",
          "2ba6b930-4ba8-4085-9e8c-24b919701f15"
        ],
        birthday: generateRandomBirthday(),
        gender: 2,
        isTosAgreementBoxChecked: true,
        secureAuthenticationIntent: {
          clientEpochTimestamp: Date.now(),
          clientPublicKey:
            "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEOCUHnc6YWzy4LA2ZU0tqTb3Zh3day//cBwWJ2I//mRLyh9yk7s7CcJsQaroQMp0NQEzBaoCqPYcAz+fYUUJ8TA==", // stays the same (roblox's public key)
          saiSignature: signature,
          serverNonce: nonceValue
        },
        password: password,
        username: username
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Csrf-Token': csrfToken,
          "Origin": "https://www.roblox.com",
          "Referer": "https://www.roblox.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36)"
        },
        httpsAgent: agent
      }
    );

    console.log('Status:', response.status);
    console.log('Username:', username);
    console.log('Password:', password);
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response;

      if (data?.errors?.some(e => e.message === 'Challenge is required to authorize the request')) {
        console.error('[!] Captcha required. Switch proxies to continue.');
      } else {
        console.error(`[-] Error: ${status}`, data);
      }

    } else {
      console.error('Error:', err.message);
    }
  }
})();
