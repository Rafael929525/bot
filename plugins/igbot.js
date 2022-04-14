let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let handler  = async (m, { conn, text }) => {
	let nani = 'https://telegra.ph/file/a0d7088d0b6d289234ede.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `*NIH INSTAGRAM AKU KAK ↓ https://instagram.com/botoltzyy*`, `Uptime : ${clockString(process.uptime() * 1000)}` , 'YOUTUBE', '.ytbot', `OWNER`, `.qowner`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.command = /^(igbot)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)