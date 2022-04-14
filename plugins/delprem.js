let handler = async (m, { conn }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : ''
    else who = m.chat
    if (global.owner.includes(who)) throw 'Yang kamu tag bukan owner !'
    let index = global.owner.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.owner.splice(index, 1)
    conn.reply(m.chat, `Hai, @${who.split('@')[0]}. Masa Owner kamu sudah berakhir!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['delowner *@user*']
handler.tags = ['owner']

handler.command = /^(remove|hapus|-|del)owner$/i

handler.owner = true

module.exports = handler
