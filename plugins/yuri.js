let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'ups nsfw lagi opp'
     json = (await Neko.nsfw.yuri()).url
   conn.sendFile(m.chat, json, 'yuri.jpg', '', m, false)
}
handler.help = ['yuri']
handler.tags = ['dewasa']
handler.command = /^yuri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler