let { WAMessageProto, MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const groupsIn = groups.filter(v => !v.read_only)
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
				} else {
				ucapanWaktu = 'Selamat Malam'
				} 
let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://telegra.ph/file/c439331e533ff281e8bda.jpg'
}
 let buttons = [
  {buttonId: '.menu3', buttonText: {displayText: '⋮☰ LIST MENU'}, type: 1},
  {buttonId: '.owner', buttonText: {displayText: '⋮☰ OWNER BOT'}, type: 1},
   {buttonId: '.alive', buttonText: {displayText: '⋮☰ INFO BOT'}, type: 1}
]
const buttonsMessage = {
    contentText: `
    
Halo ${conn.getName(m.sender)}


VC & CALL BOT = BLOCK
SPAM = BANNED + BLOCK


Ｓｕｂｓｃｒｉｂｅ
https://youtube.com/c/BotolBotZ

Ｍｙ  Ｇｒｏｕｐ
-

Ｒｅｓｔ Ａｐｉ
-

Ｉｎｆｏ  Ｂｏｔ
❏ Name : ${conn.getName(conn.user.jid)}
❏ Web Name : ${conn.browserDescription[0]}
❏ Browser : ${conn.browserDescription[1]}
❏ Web Version : ${conn.browserDescription[2]}
❏ WhatsApp Version : ${conn.user.phone.wa_version}
❏ Phone : ${conn.user.phone.device_manufacturer}
❏ Android Version : Android ${conn.user.phone.os_version}
❏ Hostname Server : ${os.hostname()}
❏ Seri Phone : ${conn.user.phone.device_model}
`.trim(),    footerText: 'BotolBotZ' ,
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: imeg }, 'imageMessage'),
  headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ 
quoted: { 
  key: {
  fromMe: false,
  participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: Object.keys(DATABASE.data.users).length, 
thumbnail: await (await require('node-fetch')(imeg)).buffer(),
    message: `${ucapanWaktu} Kak`.trim(),
    orderTitle: 'FakeTroli', // Idk what this does
    orderId: require('crypto').randomBytes(10).toString('hex').toUpperCase(), // Biar Ga ke detect bug troli
    sellerJid: '0@s.whatsapp.net' // Seller
   }
   }} })

conn.relayWAMessage(sendMsg)
}
handler.command = /^(menu)$/i

module.exports = handler

function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}