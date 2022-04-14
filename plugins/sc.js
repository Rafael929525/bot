let handler  = async (m, { conn, args }) => {
 const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `Bot Ini Menggunakan Script : https://github.com/ZeroChanBot/ZeroGans\n\nAtau Bisa Dapatkan Script Free Apikey : https://youtube.com/c/ZEROBOT7`,thumbnail: fs.readFileSync("./src/logo.jpg")}}}



   ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)

   conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: true, thumbnail: ppnya, quoted: ftoko, contextInfo : { mentionedJid: conn.parseMention(text),

    externalAdReply: {

                    title: `Halo Kak`,

                    body: ``,

                    mediaType: 2,

                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),

                    mediaUrl: 'https://youtube.com/c/'

                }

}})
handler.command = 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
