let fetch = require('node-fetch')
let handler  = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix + command} kota1|kota2`
  if (!text.includes('|')) throw `Format Salah\nContoh Penggunaan : ${usedPrefix + command} sukoharjo|klaten`
  let [kota1, kota2] = text.split('|')
   link = global.API('lol', '/api/jaraktempuh', { kota1, kota2 }, 'apikey')
  ddd = await fetch(link)
  f = await ddd.json()
  if (ddd.status !== 200) throw f
  let { from, to, jarak, kereta_api, pesawat, mobil, motor, jalan_kaki } = f.result
  conn.reply(m.chat, `Dari : ${from.name}\nMenuju : ${to.name}\nJarak Tempuh : ${jarak}\n\nPerkiraan Waktu :\nMotor : ${motor}\nMobil : ${mobil}\nKereta Api : ${kereta_api}\nPesawat : ${pesawat}\nJalan Kaki : ${jalan_kaki}\n\nYa Kali Bro Masa Mau Jalan Kaki ( ͡° ͜ʖ ͡°)`, m)
}
handler.help = ['jarakkota'].map(y => y + ' kotaA|kotaB')
handler.tags = ['internet']
handler.command = /^jarakkota$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler