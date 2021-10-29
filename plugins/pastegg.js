const souyomougyo = require("../lib/pastegg");

let handler = async function (m, { text }) {
teks = m.quoted ? m.quoted.text : text;

if (!teks) throw 'Teksnya Mana?';
m.reply('Processing....')
  const result = await souyomougyo(teks);
  srtok = `
  *Pencarian* : \`\`\`${text}\`\`\`
  *Delete Key* : \`\`\`${result.result.deletion_key}\`\`\`
  *URL* : \`\`\`${result.result.url}\`\`\`
  `.trim()
m.reply(strok)
}
handler.help = ['pastegg <text>']
handler.tags = ['internet']

handler.command = /^pastegg$/i

module.exports = handler

//Thanks To IlhamGans