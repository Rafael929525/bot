let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, user.job, global.multiplier)) {
    let { min, max } = levelling.xpRange(user.level, user.job, global.multiplier)
    return m.reply(`
Level *${user.job} (${user.level}/${max})*
Kurang *${min} Level* lagi!
`.trim())
  }
  user.job++
  m.reply(`
Selamat, Anda Naik Level
*${user.job - 1}* -> *${user.job}*
  `.trim())
}

handler.help = ['leveljob']
handler.tags = ['rpg']

handler.command = /^leveljob$/i

module.exports = handler