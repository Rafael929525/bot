let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter Teks.\nContoh !nulis5 kanan|Bu Sri Guru Yg Wajib Ada Di Sekolahan'
  m.reply('Sedang Diproses...')
  let res = await fetch(`http://zekais-api.herokuapp.com/buku${response[0]}?text=${response[1]}`)
  conn.sendFile(m.chat, res, 'buku.jpg', `Hati Hati Kak Ketauan Bu Sri :v`, m, false)
}
handler.help = ['folio'].map(v => v + ' <kanan/kiri|teks>')
handler.tags = ['nulis']

handler.command = /^(folio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler