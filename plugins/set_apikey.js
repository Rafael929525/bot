let { get } = require('axios')
let handler = async (m, { conn, text , command, args}) => {
 try {
 let { data } = await get(`https://zerochanbot.herokuapp.com/api/${command}?apikey=${args[0]}`)
  m.reply(`Berhasil`)
  } catch {
  throw 'Error!'
  }
}

handler.tags = ['api']

handler.rowner = true
handler.command = /^(addapikey|delete)$/i



module.exports = handler