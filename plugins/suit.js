let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan Yang Tersedia\n\nGunting, Kertas, Batu\n\n${usedPrefix}suit gunting\n\nKasih Spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'BATU' 
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'GUNTING' 
    } else {
        astro = 'KERTAS'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
    } else if (text == 'BATU') {
        if (astro == 'GUNTING') {
            global.DATABASE._data.users[m.sender].money += 1000
            m.reply(`Kamu Mendapatkan! +RP 1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'GUNTING') {
        if (astro == 'KERTAS') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`Kamu Menang! +RP 1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'KERTAS') {
        if (astro == 'BATU') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`Kamu Menang! +RP 1000\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.register = true
handler.limit = false

module.exports = handler
