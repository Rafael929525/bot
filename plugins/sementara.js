let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\nSaya BotolBotZ\nPilih Menu Dibawah Ya`,
                        "description": " [❗] *INI MENU SEMENTARA YA*",
                        "buttonText": "MENU DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "ALL MENU BOT",
                                        "description": "I Want To Use All Menu Bot",
                                        "rowId": "#menuall"
                                        },{
                                    	"title": "Donasi Bot",
                                        "description": "I Want To Use Donasi Bot",
                                        "rowId": "#donasi"
                                        },{
                                    	"title": "Youtube Bot",
                                        "description": "I Want To Use Youtube Bot",
                                        "rowId": "#ytbot"
                                        },{
                                    	"title": "Instagram Bot",
                                        "description": "I Want To Use Instagram Bot",
                                        "rowId": "#igbot"
                                        },{
                                        "title": "Sewa Bot",
                                        "description": "I Want To Use Sewa Menu",
                                        "rowId": "#hmpo"
                                        },{
                                        "title": "Report Bug",
                                        "description": "I Want To Use Report Bug",
                                        "rowId": "#report *Bang Botnya Ngebug*"
                                        },{
                                    	"title": "SUBSCRIBE YT : BotolBotZ",
                                        "description": ``,
                                        "rowId": "#say Jangan Lupa Subscribe Yt BotolBotZ Ya Atau Klik Link Di Bawah Ini 😁:\nhttps://bit.ly/YTBotolBotZ"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = /^(mnusementara|allmenu)$/i

module.exports = handler