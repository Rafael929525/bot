let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Teksnya Mana Bogenk!!'
  m.reply('*[❗] Wait,Tunggu Bentar Lagi Nulis...*')
  let res = `http://lolhuman.herokuapp.com/api/nulis?apikey=31caf10e4a64e86c1a92bcba&text='${response}`
  conn.sendFile(m.chat, res, 'nulis.jpg', `Nih Pemales`, m, false)
}
handler.help = ['folio4'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(folio4)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
