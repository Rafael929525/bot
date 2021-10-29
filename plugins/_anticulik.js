let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *XL:* 0812-6381-7928
• *DANA:* 0812-6381-7928

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
https://saweria.co/botoltzyyy

Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '62895320853387', 'Own Botol', idnya)
  }
  return true
}

module.exports = handler