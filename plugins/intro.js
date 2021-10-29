let handler = async (m, { conn, args, usedPrefix ,command }) => {
	 if (args.length == 0) throw `\nContoh : \n\n*${usedPrefix}${command} RakuGans*\n`
	   let rakugans = args.join(" ")
   await conn.sendMessage(m.chat, `https://kuhong-api.herokuapp.com/api/intromaker?text=${rakugans}&apikey=mWd42sD3Pwgf1BJv11p`, 'INTRO MAKER ( BETA )', 'intromaker.mp4', m)
      }
handler.help = ['intromaker']
handler.tags = ['videomaker']
handler.command = /^(intromaker)/i
module.exports = handler