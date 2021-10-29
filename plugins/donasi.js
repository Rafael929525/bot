let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [0895-3208-53387]
┣➥ *Gopay:* [0895-3208-53387]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/62895320853387*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler