let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(`https://api.zeks.xyz/api/resep-masak&apikey=apivinz`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.title) throw json
  await conn.sendFile(m.chat, json.thumb, '', `
${json.title}
${json.url}\n
*Tingkat:* ${json.tingkat}
*Durasi:* ${json.duration}
*Porsi:* ${json.banyak}\n\n
*Bahan:* ${json.bahan}
*Cara:* ${json.cara}
`.trim(), m)
}
handler.help = ['resep <makanan>', 'masak <makanan>']
handler.tags = ['internet']
handler.command = /^(resep|masak)$/i

module.exports = handler
