let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let handler  = async (m, { conn, text }) => {
	let nani = 'https://telegra.ph/file/418ae40e6608972273e68.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `
╭─「 *Open Jasa Sewa Bot* 」
│
│ > Harga Sewa :
│• Seminggu: 10K (7 Hari)
│• Sebulan: 20K (4 Minggu)
│• Setahun: 30K  (12 Bulan)
│• Jadi Owner Bot: 50K (Permanen)
│
│ > Pembayaran :
│• TRI & GOPAY : 
│  [0895-3208-53387]
│• Saweria : 
│  [https://saweria.co/botoltzy]
╰────
Minat? Chat :
http://Wa.me/62895320853387`, ` -NabilXMS` , 'DONASI', '.donasi', `OWNER`, `.qowner`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.command = /^(sewabot|sewa|hmpo)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)