// By RC047 :V

let handler = async(m, { text }) => {
    const laporan = `*woi ada yg manggil lu*`
    const laporan = `*woi ada yg manggil lu*`
    const laporan = `*woi ada yg manggil lu*`
    const laporan = `*woi ada yg manggil lu*`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '62895320853387@s.whatsapp.net'))
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('Knp Bang Manggil Nabil? Udh Saya Spam Dia Di Pc Bentar Lagi Dia Balas Chat Mu')
}

handler.customPrefix = /^$/i

handler.command = new RegExp

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false



handler.admin = false

handler.botAdmin = false

module.exports = handler
