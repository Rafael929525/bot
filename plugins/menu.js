/*

   [❗] INGIN BERTANYA TANYA???
HUBUNGI => 6287834993722
[❗] ATAU SILAHKAN JOIN
=> https://chat.whatsapp.com/ExvXgylW4LSIfGNGdg28xv

[❗] SC ORI : NURUTOMO
[❗] RECODE : RAKU

🙍‍♂️ : "KOK SIMPLE BANGET MENU NYA"
🧕 : "YAA KAN SAYA NOOB 
🙍‍♂️ : "KESIAN BADUT YANG SATU INI 🤡"
🧕 : "N4P4 G45EN4N6?? PUKUL1N 4J4 4N4K P4NT1, M4U N64DU 4M4 S14P4?? 0R4N6 7UA NY4?? CUPU LU"
🙍‍♂️ : ".............."

👨‍👩‍👧‍👧 : DARIPADA RIBUT BANTU ADMIN 
YOK DENGAN CARA SUBSCRIBE
YT BotolBotZ
 
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

let handler  = async (m, { conn, usedPrefix: _p, command }) => {
let old = performance.now()
await conn.fakeReply(m.chat, '*[❗] Ｌｏｄｉｎｇ．．．*', '0@s.whatsapp.net', '', 'status@broadcast')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const groupsIn = groups.filter(v => !v.read_only)
let ZeroGans = './src/logo.png'
let pepe = 'https://i.ibb.co/Q9Wj9vh/IMG-20210817-WA0001.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    ZeroGans = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let neww = performance.now()
    let old = performance.now()
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
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
  var zerobars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'

         if (lbars >= '0' && lbars <= '5') {
                zerobars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'
         } else if (lbars >= '5' && lbars <= '10') {
				zerobars = '[â–ˆâ–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'
		 } else if (lbars >= '10' && lbars <= '20') {
				zerobars = '[â–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–’â–’â–’]'
		} else if (lbars >= '20' && lbars <= '30') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–â–’]'
		} else if (lbars >= '30' && lbars <= '40') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–â–’]'
		} else if (lbars >= '40' && lbars <= '50') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’]'
		} else if (lbars >= '50' && lbars <= '60') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’]' 
		} else if (lbars >= '60' && lbars <= '70') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’]'
		} else if (lbars >= '70' && lbars <= '80') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’]'
		} else if (lbars >= '80' && lbars <= '90') {
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’]'
		} else if (lbars >= '90' && lbars <= '100') {
				zerobars = '[â–ˆâ–ˆâ–’â–’â–’â–’â–’â–ˆâ–ˆâ–ˆâ–ˆ]'
		} else { 
				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ]'
		} 

const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi '



				if (jam >= '05' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam'
				
				} else if (jam >= '0' && jam <= '5') {

				ucapanWaktu = 'Selamat Dini hari'

				} else {

				ucapanWaktu = 'Selamat Dini Hari'

				}
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
    const hariRaya = new Date('dec 31, 2021 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
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
    let totalsend = global.DATABASE.data.stats['menu.js'].total
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
      'panik': 'Prank Menu',
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
Hello *%name*
Im *${conn.getName(conn.user.jid)}* And You Use Prefix *%p*

â ï¼©ï½Žï½†ï½ ï¼¢ï½ï½”
❒ Bot Name : *${conn.getName(conn.user.jid)}*
❒ Browser : *${conn.browserDescription[1]}*
❒ Wa Web Name : *${conn.browserDescription[0]}*
❒ Wa Web Version : *${conn.browserDescription[2]}*
❒ WhatsApp Version : *${conn.user.phone.wa_version}*
❒ Phone : *${conn.user.phone.device_manufacturer}*
❒ Version Android : Android ${conn.user.phone.os_version}
❒ Hostname Server : ${os.hostname()}
❒ Seri Phone : *${conn.user.phone.device_model}*
❒ Version : *%version*
❒ Speed : ${neww} *ms*
❒ Level Bars : *${zerobars}*
❒ Total Features : *1000+*

❒ Click Here To Join
❒ *https://bit.ly/*

â ï¼©ï½Žï½†ï½ ï¼µï½“ï½…ï½’
❒ UserName : *%name*
❒ Serial Number : *${sn}*
❒ Prefix :  *%p* 
❒ Mention : *@${m.sender.replace(/@.+/, '')}*
❒ Age : *${registered ? '' + age : ''}*
❒ Phone Number : *${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*
❒ Registered : *${registered ? 'Yes': 'No'}*
❒ Premium User : *${premium ? 'Yes': 'No'}*
❒ Pekerjaan : *${zerojob}*
❒ Role : *%role*
❒ Health : *%healt*
❒ Coin : *%coin*
❒ Money : *RP %money*
❒ Ticket : *%limit*
❒ Game Limit : *%tigame*
❒ Level : *%level*
❒ Exp : *%exp*
❒ Exp To Levelup : *%xp4levelup*
❒ Total Exp : *%totalexp*

â ï¼¤ï½ï½”ï½… ï¼† ï¼´ï½‰ï½ï½…
❒ Day : *%week*
❒ Date : *%date*
❒ Weton : *%weton*
❒ Islamic Date : *${dateIslamic}*
❒ Time : *%time WIB*
❒ Time : *${wit} WIT*
❒ Time : *${wita} WITA*

â ï¼¤ï½ï½”ï½
❒ Uptime : *%uptime*
❒ Total Hit : *%totalsend*
❒ Main Uptime : *%muptime*
❒ Users In Database : *%totalreg Users*
❒ Registered : *%rtotalreg*
❒ Total GC : *%totalgc*

%readmore`
    let header = conn.menu.header || '╭───%category───❏'
    let body   = conn.menu.body   || '│❒ *%cmd%islimit*'
    let footer = conn.menu.footer || '╰──────❏ '
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n\n*THANKS TO*\n\n*❒ Nurutomo*\n*❒ RendyCraft047*\n*❒ Ibnu NR*\n❒ Caliph*\n*❒ Nabil*\n*❒ Indra*\n*❒ Penyedia Apikey*`
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
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, coin, tigame, totalsend, sn, 
      readmore: readMore
    }
text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])

    conn.sendMessage(m.chat, '', 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://youtube.com/c/BotolBotZ',
mediaType: 2,
title: 'List Menu Zero',
body: '',
thumbnailUrl: 'https://i.ibb.co/Q9Wj9vh/IMG-20210817-WA0001.jpg',
}}) 
handler.help = ['o']
handler.tags = ['o']
handler.command = ['o']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
} 