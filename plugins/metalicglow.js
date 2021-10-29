let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/textmaker/metallic?text=${response}&theme=neon&apikey=AriaApi`)
  let image = await res.json()
  conn.sendFile(m.chat, image, 'metalic-glow.jpg', `Nih Kak`, m, false)
}
handler.help = ['metalicglow'].map(v => v + ' <teks>')
handler.tags = ['image']
handler.command = /^(metalicglow)$/i
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


