let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let handler  = async (m, { conn, text }) => {
	let nani = 'https://telegra.ph/file/2a23f29a8bc87b2eafde8.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• 10K / Bulan (4 Minguu)
│• 30K / Tahun (12 Bulan)
│• 50K / VIP (Permanen)
│
│ > Pembayaran :
│• TRI : 62895320853387
│• SAWERIA : saweria.co/botoltzy
╰────`, ` -NabilXMS` , 'SEWABOT', '.hmpo', `OWNER`, `.owner`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.command = /^(premium)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)