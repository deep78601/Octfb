 const fs = require("fs");
module.exports.config = {
	name: "Jagdeep",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Deep", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Jagu") ||
     react.includes("Jagdeep") || 
react.includes("jagdeep")) {
		var msg = {
				body: "❤𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳                                                                                                                            ☄️Bot Name︎︎︎☄️ ⚔ DEEP🔥 ⚔                                                        🔥𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 🔥                    ✰☞︎︎︎ 𝐉𝐀𝐆𝐃𝐄𝐄𝐏 𝐒𝐈𝐍𝐆𝐇 ☜︎︎︎✰       ●▬▬▬▬๑۩۩๑▬▬▬▬                   🙈𝐨𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 𝐋𝐢𝐧𝐤🙈                                               ➪https://www.facebook.com/jagdeep.448 💞🕊️                                                               ⃟ Other contacts ☑  ⃠⃠                                        ✅𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦👉 https://www.instagram.com/jagdeep2213k9?igsh=Y25rbWxkbXByMnFo                                                                          ✅𝐘𝐨𝐮𝐓𝐮𝐛𝐞 🗡 ➪https://www.youtube.com/Jagdeep448 ✧══════•❁❀❁•══════✧                                                                                   🌸𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗🌸☞︎︎︎ + ☜︎︎︎✰                                                     🥳UPTIME🥳                                                        ⚡Bot is running⚡                                              ✅Thanks for using My Bot ❤ DEEP🔥 🖤 ★\n\n       ✦𝙹𝙰𝙶𝙳𝙴𝙴𝙿 ✸ 𝚂𝙸𝙽𝙶𝙷✦\n\n\n\n         ✦ ਰੱਬ ਸਬ ਤੇ ਮਹਿਰ ਕਰੇ ✦",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("♠", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }