const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, args }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan request\n\nContoh: !request Fitur Baru', m)
    if (conn.groupMetadata(m.chat) < 30) return conn.reply(m.chat, 'Member group tidak melebihi 30, bot tidak bisa masuk', m)
           const link = args[1]
            const key = args[2]
            const minMem = 30
     if (key !== 'TKPINDIHOME') return conn.reply(m.chat, '*key* salah! silahkan chat owner bot unruk mendapatkan key yang valid', m)
            const check = await conn.inviteInfo(link)
    if (text > 300) return conn.reply(m.chat, 'Maaf Link Terlalu Panjang, Sepertinya Ini Bukan Link Grup:v', m)
    if (args.length < 2) return conn.reply(m.chat, 'Kirim perintah *!join linkgroup key*\n\nEx:\n!join https://chat.whatsapp.com/blablablablablabla abcde\nuntuk key kamu bisa mendapatkannya hanya dengan donasi 5k', m)
    var nomor = m.sender
    const teks1 = `*[ REQUEST ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('6287834993722@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Link Request Anda telah dikirimkan ke Owner\nSilahkan Chat Ke Owner Dan Konfrimasi Pembayaran\n\nNomer Owner :wa.me/6287834993722', m)
}
handler.help = ['jsjhdhd <link gc>']
handler.tags = ['daftar']
handler.command = /^(ejrjhr)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
