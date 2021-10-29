let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.text.toLowerCase() == 'p') {
    m.reply('Salam Yang Bener Tolol') 
}
  return true
}

module.exports = handler
