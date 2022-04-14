let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\nSaya BotolBotZ\nPilih Menu Dibawah Ya`,
                        "description": "*Subscribe https://bit.ly/YTBotolBotZ*",
                        "buttonText": "MENU DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "ALL MENU BOT",
                                        "description": "I Want To Use All Menu Bot",
                                        "rowId": ".allmenu"
                                        },{
                                    	"title": "Donasi Bot",
                                        "description": "I Want To Use Donasi Bot",
                                        "rowId": ".donasi"
                                        },{
                                    	"title": "Group Menu",
                                        "description": "I Want To Use Groups Menu",
                                        "rowId": ".gcmenu"
                                        },{
                                        "title": `Premium Menu`,
                                        "description": "I Want To Use Premium Menu",
                                        "rowId": ".premmenu"
                                        },{
                                        "title": `Creator Menu`,
                                        "description": "I Want To Use Creator Menu",
                                        "rowId": ".crmenu"
                                        },{
                                        "title": "Owner Menu",
                                        "description": "I Want To Use Owner Menu",
                                        "rowId": ".ownmenu"  
                                         },{
                                        "title": `DataBase Menu`,
                                        "description": "I Want To Use Database Menu",
                                        "rowId": ".dbmenu"
                                        },{
                                        "title": `Tools Menu`,
                                        "description": "I Want To Use Tools Menu",
                                        "rowId": ".toolsmenu"
                                         },{
                                        "title": "Hentai Menu",
                                        "description": "I Want To Use Hentai Menu",
                                        "rowId": ".hentmenu"   
                                         },{
                                        "title": "Editor Menu",
                                        "description": "I Want To Use Editor Menu",
                                        "rowId": ".editmenu"
                                         },{
                                        "title": "News Menu",
                                        "description": "I Want To Use News Menu",
                                        "rowId": ".nwsmenu" 
                                         },{
                                        "title": "Xp Menu",
                                        "description": "I Want To Use Xp Menu",
                                        "rowId": ".xpimenu"             
                                         },{
                                        "title": "Kerang Menu",
                                        "description": "I Want To Use Kerang Menu",
                                        "rowId": ".krngmenu"    
                                         },{
                                        "title": "Education Menu",
                                        "description": "I Want To Use Education Menu",
                                        "rowId": ".educationmenu"     
                                        },{
                                        "title": "Search Menu",
                                        "description": "I Want To Use Search Menu",
                                        "rowId": ".srcmenu"             
                                        },{
                                        "title": "Virtex Menu",
                                        "description": "I Want To Use Virtex Menu (Owner Only)",
                                        "rowId": ".virtex"              
                                        },{
                                        "title": "Jadibot Menu",
                                        "description": "I Want To Use Jadibot Menu",
                                        "rowId": ".jbotmenu"        
                                        },{
                                        "title": "Dewasa Menu",
                                        "description": "I Want To Use Dewasa Menu",
                                        "rowId": ".dwsmenu"
                                        },{
                                        "title": "Primbon Menu",
                                        "description": "I Want To Use Primbon Menu",
                                        "rowId": ".primmenu"  
                                        },{
                                        "title": "Sound Menu",
                                        "description": "I Want To Use Sound Menu",
                                        "rowId": ".soundmenu"  
                                        },{
                                        "title": "Image Menu",
                                        "description": "I Want To Use Image Menu",
                                        "rowId": ".imgmenu"
                                        },{
                                        "title": "Hadiah Menu",
                                        "description": "I Want To Use Hadiah Menu",
                                        "rowId": ".hadiahmenu"
                                        },{
                                        "title": "Absen Menu",
                                        "description": "I Want To Use Absen Menu",
                                        "rowId": ".absenmenu"
                                        },{
                                        "title": "Vidio Menu",
                                        "description": "I Want To Use Vidio Menu",
                                        "rowId": ".vidmenu"    
                                        },{
                                        "title": "Music Menu",
                                        "description": "I Want To Use Music Menu",
                                        "rowId": ".mscmenu"       
                                        },{
                                        "title": "Spammer Menu",
                                        "description": "I Want To Use Spammer Menu",
                                        "rowId": ".spammenu"    // ini spammer menu               
                                        },{
                                        "title": "Sewa Bot",
                                        "description": "I Want To Use Sewa Menu",
                                        "rowId": ".hmpo"
                                        },{
                                        "title": "Report Bug",
                                        "description": "I Want To Use Report Bug",
                                        "rowId": ".report *Bang Botnya Ngebug*"
                                        },{
                                    	"title": "SUBSCRIBE YT : BotolBotZ",
                                        "description": `Battery : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'Pengisian Daya' : ''}` : 'tidak diketahui'}`,
                                        "rowId": ".say Jangan Lupa Subscribe Yt BotolBotZ Ya Atau Klik Link Di Bawah Ini 😁:\nhttps://bit.ly/YTBotolBotZ"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = /^(butmenu|btn|submenu)$/i

module.exports = handler