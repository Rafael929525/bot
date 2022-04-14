/*

   [] INGIN BERTANYA TANYA???
HUBUNGI => 62895320853387
[] ATAU SILAHKAN JOIN
=> https://chat.whatsapp.com/ExvXgylW4LSIfGNGdg28xv

[] SC ORI : NURUTOMO
[] RECODE : RAKU

❏ : "KOK SIMPLE BANGET MENU NYA"
❏ : "YAA KAN SAYA NOOB 
❏ : "KESIAN BADUT YANG SATU INI "
❏ : "N4P4 G45EN4N6?? PUKUL1N 4J4 4N4K P4NT1, M4U N64DU 4M4 S14P4?? 0R4N6 7UA NY4?? CUPU LU"
❏ : ".............."

❏ : DARIPADA RIBUT BANTU ADMIN 
YOK DENGAN CARA SUBSCRIBE
YT ZEROBOT
 
*/
let fs = require ('fs')
const { createHash } = require('crypto') 
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
const os = require('os')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')

//========== BATASSS NGABBB ==========//

let handler  = async (m, { conn, usedPrefix: _p, command, args }) => {
let neww = performance.now()
let teks = `${args[0]}`.toLowerCase()
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const petik = '```'
const img = './src/logo.jpg'
const groupsIn = groups.filter(v => !v.read_only)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   try {
  	const job = global.DATABASE.data.users[m.sender].level
  var zerojob = 'Pengangguran'
  
  	      if (job >= '0' && job <= '5') {
  		      zerojob = 'Pengangguran'
 } else if (job >= '5' && job <= '10') {
 			   zerojob = 'Pemulung'
 } else if (job >= '10' && job <= '20') {
 			   zerojob = 'Miner/Penambang'
 } else if (job >= '20' && job <= '30') {
 			   zerojob = 'Penebang Pohon'
 } else if (job >= '30' && job <= '40') {
 			   zerojob = 'Pangkalan Ojek'
 } else if (job >= '40' && job <= '50') {
 			   zerojob = 'Driver Online'
 } else if (job >= '50' && job <= '60') {
 			   zerojob = 'Satpam'
 } else if (job >= '60' && job <= '70') {
 			   zerojob = 'Polisi'
 } else if (job >= '70' && job <= '80') {
 			   zerojob = 'Tentara'
 } else if (job >= '80' && job <= '90') {
 			   zerojob = 'Pekerja Kantoran'
 } else if (job >= '90' && job <= '100') {
 			   zerojob = 'Prostitusi Online'
 } else {
 			   zerojob = 'Prostitusi Online'
 }
 
  	const lbars = global.DATABASE.data.users[m.sender].level
  var zerobars = '[▒▒▒▒▒▒▒▒▒]'

         if (lbars >= '0' && lbars <= '5') {
                zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
         } else if (lbars >= '5' && lbars <= '10') {
				zerobars = '[█▒▒▒▒▒▒▒▒▒]'
		 } else if (lbars >= '10' && lbars <= '20') {
				zerobars = '[██▒▒▒▒▒▒▒▒]'
		} else if (lbars >= '20' && lbars <= '30') {
				zerobars = '[███▒▒▒▒▒▒▒]'
		} else if (lbars >= '30' && lbars <= '40') {
				zerobars = '[████▒▒▒▒▒▒]'
		} else if (lbars >= '40' && lbars <= '50') {
				zerobars = '[█████▒▒▒▒▒]'
		} else if (lbars >= '50' && lbars <= '60') {
				zerobars = '[██████▒▒▒▒]' 
		} else if (lbars >= '60' && lbars <= '70') {
				zerobars = '[███████▒▒▒]'
		} else if (lbars >= '70' && lbars <= '80') {
				zerobars = '[████████▒▒]'
		} else if (lbars >= '80' && lbars <= '90') {
				zerobars = '[█████████▒]'
		} else if (lbars >= '90' && lbars <= '100') {
				zerobars = '[██████████]'
		} else { 
				zerobars = '[██████████]'
		} 

const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
				//ini ada 4 fake, jadi bisa dipilih
const fgif = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...{from: { remoteJid: "62895320853387-1621306547@g.us" }},
  },
  message: {
    videoMessage: {
      title: `BotolBotZ`,
      h: `Hmm`,
      seconds: "99999",
      gifPlayback: "true",
      caption: `BotolBotZ`,
      jpegThumbnail: fs.readFileSync('./src/logo.jpg')
    }
  }
}
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: 'Subscribe BotolBotZ', //Kasih namalu
                            orderTitle: 'Subscribe YT BotolBotZ',
                            thumbnail: fs.readFileSync('./src/logo.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"RakuGans","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "62895320853387-1621306547@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
                        }
	                  } 
                     }
const ftextumb = {
			 key: { 
				  fromMe: false,
				  participant: `0@s.whatsapp.net`, ...(m.chat ? 
			 { remoteJid: "62895320853387-1621306547@g.us" } : {}) 
						},
			 message: {
				"extendedTextMessage": {
						 "text": `${ucapanWaktu}`,
						 "title": `Hmm`,
						 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
								}
							  } 
							 }
const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"Indonesia","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}
const fvideo = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...{from: { remoteJid: "62895320853387-1621306547@g.us" }},
  },
  message: {
    videoMessage: {
      title: `BotolBotz`,
      h: `Hmm`,
      seconds: "99999",
      caption: `Botolbotz`,
      jpegThumbnail: fs.readFileSync('./src/logo.jpg')}}}
      
 const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `${ucapanWaktu}`,thumbnail: fs.readFileSync("./src/logo.jpg")}}}
const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {



					"productMessage": {

						"product": {

							"productImage": {

								"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",

								"mimetype": "image/jpeg",

								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",

								"fileLength": "43344",

								"height": 1080,

								"width": 1080,

								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",

								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",

								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",

								"mediaKeyTimestamp": "1612168223",

								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)

		},

							"productId": "3872465552870232",

							"title": `RP 50.000`,

							"description" : `${ucapanWaktu}`,

	"productImageCount": 1

						},

						"businessOwnerJid": "62895320853387@s.whatsapp.net"}}}    
						
let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let sn = createHash('md5').update(m.sender).digest('hex')
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let totalfeature = Object.values(global.plugins).filter(v => v.help && v.tags).length
        const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('December 31, 2021 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const ultah = new Date('January 3, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let rtotalreg = 0
    rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
  'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'xp': 'Exp & Limit',
      'rpg': 'Adventure Menu (NEW)', 
      'tutor': 'Tutorial BotolBotZ',
      'hadiah': 'Hadiah',
     ' apk': 'Apk Downloader', 
      'dewasa': '18+ Menu',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Gtwlah',
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'game': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'Video Menu',
      'anony': 'Anonymous Chat',
      'input': 'Virus Tapi Bukan Virus', 
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'tools': 'Tools Menu',
      'jadibot': 'Bot Numpang',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'info': 'Information',
      'thnks': 'Thanks To', 
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
${petik}Hello %name${petik} 
${petik}Im ${conn.getName(conn.user.jid)} And You Use Prefix %p${petik} 

❏ Ｉｎｆｏ Ｂｏｔ
❏ Bot Name : ${petik} ${conn.getName(conn.user.jid)} ${petik} 
❏ Ulang Tahun Owner : ${petik} ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik ${petik} 
❏ Battery : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'Pengisian Daya' : ''}` : 'tidak diketahui'}
❏ Browser : ${petik} ${conn.browserDescription[1]} ${petik} 
❏ Wa Web Name : ${petik} ${conn.browserDescription[0]} ${petik} 
❏ Wa Web Version : ${petik} ${conn.browserDescription[2]} ${petik} 
❏ WhatsApp Version : ${petik} ${conn.user.phone.wa_version} ${petik} 
❏ Phone : ${petik} ${conn.user.phone.device_manufacturer} ${petik} 
❏ Version Android : ${petik} Android ${conn.user.phone.os_version} ${petik} 
❏ Hostname Server : ${petik} ${os.hostname()} ${petik} 
❏ Seri Phone : ${petik} ${conn.user.phone.device_model} ${petik} 
❏ Version : ${petik} %version ${petik} 
❏ Speed : ${petik} ${neww} ms ${petik} 
❏ Total Features : ${petik} 1000+ ${petik} 

❏ ${petik} Join Here ${petik} 
❏ ${petik} - ${petik} 

❏ Ｉｎｆｏ Ｕｓｅｒ
❏ UserName : ${petik} %name ${petik} 
❏ Serial Number : ${petik} ${sn} ${petik} 
❏ Prefix : ${petik} %p ${petik}  
❏ Mention : ${petik} @${m.sender.replace(/@.+/, '')} ${petik} 
❏ Age : ${petik} ${registered ? '' + age : ''} ${petik} 
❏ Phone Number : ${petik} ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')} ${petik} 
❏ Registered : ${petik} ${registered ? 'Yes': 'No'} ${petik} 
❏ Premium User : ${petik} ${premium ? 'Yes': 'No'} ${petik} 
❏ Pekerjaan : ${petik} ${zerojob} ${petik} 
❏ Role : ${petik} %role ${petik} 
❏ Level Bars : ${petik} ${zerobars} ${petik} 
❏ Health : ${petik} %healt ${petik} 
❏ Coin : ${petik} %coin ${petik} 
❏ Money : ${petik} RP %money ${petik} 
❏ Ticket : ${petik} %limit ${petik} 
❏ Game Limit : ${petik} %tigame ${petik} 
❏ Level : ${petik} %level ${petik} 
❏ Exp : ${petik} %exp ${petik} 
❏ Exp To Levelup : ${petik} %xp4levelup ${petik} 
❏ Total Exp : ${petik} %totalexp ${petik} 

❏ Ｄａｔｅ ＆ Ｔｉｍｅ
❏ Day : ${petik} %week ${petik} 
❏ Date : ${petik} %date ${petik} 
❏ Weton : ${petik} %weton ${petik} 
❏ Tahun Baru : ${petik} ${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik Lagi ${petik}
❏ Islamic Date : ${petik} ${dateIslamic} ${petik} 
❏ Time : ${petik} %time WIB ${petik} 
❏ Time : ${petik} ${wit} WIT ${petik} 
❏ Time : ${petik} ${wita} WITA ${petik} 

❏ Ｄａｔａ
❏ Uptime : ${petik} %uptime ${petik} 
❏ Main Uptime : ${petik} %muptime ${petik} 
❏ Users In Database : ${petik} %totalreg Users ${petik} 
❏ Registered : ${petik} %rtotalreg ${petik} 
❏ Total GC : ${petik} %totalgc ${petik} 
%readmore

`
    let header = conn.menu.header || '༺ %category ༻'

    let body   = conn.menu.body   || '│ 𖣵 %cmd%islimit' 

    let footer = conn.menu.footer || '╰────\n'

    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``

    let _text  = before + '\n'

    for (let tag in groups) {

      _text += header.replace(/%category/g, tags[tag]) + '\n'

      for (let menu of groups[tag]) {

        for (let help of menu.help)

          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'

      }

      _text += footer + '\n'

    }

    _text += after

    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: _p, uptime, muptime,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      exp: exp - min,

      maxexp: xp,

      totalexp: exp,

      xp4levelup: max - exp <= 0 ? `Siap Untuk *${_p}levelup*` : `${max - exp} XP Lagi Untuk Levelup`,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, coin, tigame, sn, 

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])

   ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)

   conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: true, thumbnail: ppnya, quoted: ftroli, contextInfo : { mentionedJid: conn.parseMention(text),

    externalAdReply: {

                    title: `Halo ${conn.getName(m.sender)}`,

                    body: `${ucapanWaktu} ${name}`,

                    mediaType: 2,

                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),

                    mediaUrl: 'https://youtu.be/t0JWm11sZQw'

                }

}})

  } catch (e) {

    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)

    throw e

  }

}
handler.command = ['menuall']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = false

module.exports = handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}