let { getBuffer } = require('../lib/functions')
let axios = require('axios')
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
    let res = await fetch(`https://api.zeks.xyz/api/gdbypass?apikey=apivinz&url=${text}`).then ((res) => {
    let json = await res.json()
    if (!json.status) throw json
    let data = json.result
    let index = Math.floor(Math.random() * data.length)
    let object = data[index]
    let thumb = await (await fetch(object.thumbnail)).buffer()
    let hasil = `*GDRIVE DOWNLOADER*\n\nJudul: ${res.data.file_name}\nDownload Link: ${res.data.download_link}\nDirect: ${res.data.direct_download}`

    conn.sendFile(m.chat, thumb, 'gdrive.jpg', hasil, m)
}
handler.help = ['gdrive'].map(v => v + ' <query>')
handler.tags = ['apk']
handler.command = /^(gdrive)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
