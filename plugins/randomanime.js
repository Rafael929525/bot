let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
let items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
    let anime = items[Math.floor(Math.random() * items.length)];
    let url = "http://fdciabdul.tech/api/pinterest/?keyword=" + anime;
    let str = `
Nih Anime
`.trim()

    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let anim =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(anim) // Path to the image
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); // Ta-da

    conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
handler.help = ['randomanime']
handler.tags = ['anime']
handler.command = /^(randomanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler