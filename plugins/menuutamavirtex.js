let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "*Silahkan Klik Menu Virtex Dibawah*",
                        "description": "© BotolBotZ",
                        "buttonText": "PILIH VIRTEX",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `VIRTEX 1`,
                                        "rowId": ".virtex1"
                                    },{
                                        "title": "VIRTEX 2",
                                        "rowId": ".virtex2"                 
                                    },{
                                        "title": "VIRTEX 3",
                                        "rowId": ".virtex3"
                                    },{
                                    	"title": "SUBSCRIBE YT : BotolBotZ",
                                        "rowId": ".menu3"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['virtex']
handler.register = true
handler.premium = true
module.exports = handler