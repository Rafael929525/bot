let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m) => {
let foto = fs.readFileSync('./src/logo.jpg')
let user = global.DATABASE.data.users[m.sender]
conn.sendFile(m.chat, img, 'logo.jpg', `
Hai Kak ${conn.getName(m.sender)}
`, key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "locationMessage": { "title":"jakarta","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}}
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌝"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}