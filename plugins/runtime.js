let handler  = async (m, { conn, usedPrefix: _p }) => {
	function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
let event = `Runtime ${clockString(process.uptime() * 1000)}`.trim()

  conn.fakeReply(m.chat, event, '6281111111111@s.whatsapp.net', '*Subscribe YT : BotolBotZ*')
}
handler.help = ['runtime']
handler.tags = ['hadiah']
handler.command = /^(runtime)$/i

handler.fail = null 

module.exports = handler
