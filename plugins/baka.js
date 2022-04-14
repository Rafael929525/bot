let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(`_*「  WAITING  」* Perintah Kak ${conn.getName(m.sender)} Sedang Di Proses_`)
  let res = `https://api.caliph71.xyz/api/randombaka?apikey=VzqXeuvj`
  m.reply(`_*Gagal Kk*_`)
  conn.sendFile(m.chat, res, 'baka.jpg', `istri kamu kok kartun banhj`, m, false)
}
handler.help = ['baka'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(baka)$/i

module.exports = handler