let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, text:sksk }) => {
	let nani = 'https://telegra.ph/file/71dcd1a7ac03afd276c77.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), text.trim(), '', 'SUBSCRIBE YT BotolBotZ', '.hmggff', '🐤', '.', m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.help = ['alljhbbvu'].map(v => v + '')
handler.tags = ['owner']
handler.command = /^(kjggg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

