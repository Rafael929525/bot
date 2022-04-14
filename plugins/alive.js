// By Caliph & Akbar
let fetch = require('node-fetch')
let fs = require('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  denz.on("CB:action,,battery", json => {
  const battery = json[2][0][1].value
  const persenbat = parseInt(battery)
  baterai.battery = `${persenbat}%`
  baterai.isCharge = json[2][0][1].live
  }

let handler  = async (m, { conn }) => {
  pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE._data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`
❏ *Bot Name* : ${conn.user.name}
❏ *Groups Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
❏ *Personal Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
❏ *User Total* : ${totaluser.length}
❏  *Battery* : ${baterai.battery}
❏ *Wa Web Name* : ${conn.browserDescription[0]}
❏ *Wa Web Version* : ${conn.browserDescription[2]}
❏ *Browser* : ${conn.browserDescription[1]}
❏ *Uptime Bot* : ${clockString(process.uptime() * 1000)}
❏ *Host Number* : @${global.conn.user.jid.split('@')[0]}
❏ *Bio Bot* : ${ppstatus.status}\n\n*Support/Subscribe Me*\n_https://youtube.com/channel/_`, quoted: m, sendEphemeral: true, thumbnail: fs.readFileSync('./src/error.png'), contextInfo: { mentionedJid: [global.conn.user.jid]}})
}
handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i
handler.fail = null

module.exports = handler