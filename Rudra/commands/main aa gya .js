const fs = require("fs");
module.exports.config = {
	name: "deep aa gya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "jagdeep", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "deep",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@ਪੰਗੇ　ਨਾ　ਲੈ　ਸੋਹਣੀਏ　ਮਹਿੰਗੇ ਪੈ　ਜਾਣਗੇ　ਪਾਪੀ　ਨਰਕਾਂ ਨੂੰ　ਚੱਲੇ　ਨਾਲ　ਲੈ　ਜਾਣਗੇ")==0 || event.body.indexOf("@ਪੰਗੇ　ਨਾ　ਲੈ　ਸੋਹਣੀਏ　ਮਹਿੰਗੇ ਪੈ　ਜਾਣਗੇ　ਪਾਪੀ　ਨਰਕਾਂ ਨੂੰ　ਚੱਲੇ　ਨਾਲ　ਲੈ　ਜਾਣਗੇ ")==0 || event.body.indexOf("@Deep Randhawa")==0 || event.body.indexOf("Deep Randhawa")==0) {
		var msg = {
				body: "🙈",
				attachment: fs.createReadStream(__dirname + `/noprefix/dk.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
