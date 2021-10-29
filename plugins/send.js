const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomornya', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 100) return conn.reply(m.chat, 'Teks Terlalu Panjang, Maksimal 100 Huruf!', m)

    let tujuan = `${number}`
    var nomor = m.sender
    let send = `${pesan}`

    conn.sendMessage(tujuan + '@s.whatsapp.net', send, MessageType.text)

    let pes = `[ ! ] Sukses Mengirim Surat WhatsApp Ke Nomor ${korban}`
    conn.reply(m.chat, pes, m)
}
handler.help = ['suratto <nomor|pesan>']
handler.tags = ['spam']
handler.command = /^(suratto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
