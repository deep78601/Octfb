const fs = require("fs");
module.exports.config = {
	name: "🙂RamdiRona",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "araara",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  let bot = global.config.OTHERBOT;
	
	if ((event.body.indexOf("🙂")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙂")==0 ) && !bot.includes(event.senderID)) {
		var msg = {
				body: "𝐂𝐨𝐍𝐠𝐑𝐚𝐭𝐬, 𝐘𝐨𝐮 𝐰𝐨𝐧 𝐚 𝐑𝐞𝐰𝐚𝐫𝐝",
				attachment: fs.createReadStream(__dirname + `/noprefix/rona.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }