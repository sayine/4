var CoinKey = require('coinkey');
const BigNumber = require('bignumber.js');
var nodemailer = require('nodemailer');
const cron = require('node-cron');

var transporter = nodemailer.createTransport({service: 'gmail',auth: {user: 'nodejs577@gmail.com',pass: 'khve hbqo fdgv ygdh'}});

let Bitcoin = {};
var i = new BigNumber(0); 
var key65M = new BigNumber('2f18fe5b7fcc312c0', 16);

do {
var key66M = key65M.plus(i);
var p66HexNumberM = key66M.toString(16)
var addressM = 0;
var privateKeyM = 0;

Bitcoin.createPrivateKey = () => {
    var keyPairM = '00000000000000000000000000000000000000000000000' + p66HexNumberM;
    privateKeyM = keyPairM.toString('hex');
    var keyM = new CoinKey(new Buffer.from(privateKeyM, 'hex'));
    keyM.compressed = true;
    addressM = keyM.publicAddress;
    wifM = keyM.privateWif;
}

function dailyMail() {
  var mailOptions = {from: 'nodejs577@gmail.com',to: 'emrahsayin@yandex.com',subject: 'Daily PK 66P2',text: privateKeyM};
  transporter.sendMail(mailOptions, function(error, info){if (error) {console.log(error);} else {console.log('Email sent: ' + info.response);}});
}

cron.schedule('0 0 * * *', dailyMail, {
  scheduled: true,
  timezone: "Europe/Istanbul" 
});

Bitcoin.createPrivateKey();

  if (addressM === '13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so') {
    var mailOptions = {from: 'nodejs577@gmail.com',to: 'emrahsayin@yandex.com',subject: privateKeyM,text: wifM};
    transporter.sendMail(mailOptions, function(error, info){if (error) {console.log(error);} else {console.log('Email sent: ' + info.response);}});
  };

  i = i.plus(1);
}
  while(addressM !== '13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so');
