let handler = m => m

handler.all = async function (m) {
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId) && !m.key.fromMe) {
this.clearMessage(m.key)
    }
}

module.exports = handler