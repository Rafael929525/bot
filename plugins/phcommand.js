let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  m.reply('*Gagal Kk*')
  let res = ``
  conn.sendFile(m.chat, res, 'phcommand.jpg', `Nih kak`, m, false)
}
handler.help = ['phcommand'].map(v => v + ' <name|pesan>')
handler.tags = ['sticker']
handler.command = /^(phcommand)$/i

module.exports = handler

