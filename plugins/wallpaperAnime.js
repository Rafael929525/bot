const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = `https://caliph71.xyz/api/randomwp?apikey=VzqXeuvj`
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*© BotolBotZ*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['wallpaperanime']
handler.tags = ['anime']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
