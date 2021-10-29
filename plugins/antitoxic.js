let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/tag.webp')
conn.fakeReply(m.chat, stc, '628999800123@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@62895320853387)$/i
handler.command = new RegExp

module.exports = handler
