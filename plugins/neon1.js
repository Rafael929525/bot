let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://zekais-api.herokuapp.com/textpro/neon?text=${response}&apikey=jP6sJLnE`)
  let image = await res.buffer()
  conn.sendFile(m.chat, image, 'neon.jpg', `Nih kak`, m, false)
}
handler.help = ['neon1'].map(v => v + ' <teks>')
handler.tags = ['image']
handler.command = /^(neon1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


