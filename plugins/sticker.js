//
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      m.reply(`_*「  WAITING  」* Perintah Kak ${conn.getName(m.sender)} Sedang Di Proses_`)
      stiker = await sticker(img, false, 'BotolBotZ', require('awesome-phonenumber')('DRABOTZ\n0895704286848'). getNumber('international'))
    } else if (args[0]) stiker = await sticker(false, args[0], 'BotolBotZ', require('awesome-phonenumber')('DRABOTZ\n0895704286848'). getNumber('international'))
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^(sticker)$/i

module.exports = handler