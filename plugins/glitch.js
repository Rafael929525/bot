let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
   let [t1, t2] = text.split `|`
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://zerochanbot.herokuapp.com/api/textmaker?text=${t1}&text2=${t2}&theme=glitch&apikey=RakuGans`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'glitch.jpg', `Nih kak`, m, false)
}
handler.help = ['glitch'].map(v => v + ' teks|teks')
handler.tags = ['sticker']

handler.command = /^(glitch)$/i

module.exports = handler
