var TelegramBot = require('node-telegram-bot-api');
var fs = require("fs");
var router = require("./router.js");
var config = JSON.parse(fs.readFileSync("config.json"));

// Setup telegram polling
var bot = new TelegramBot(config["Telegram_token"], { polling: true });
//add additional contexts to be passed to controllers here
var contexts = {
	bot: bot,
	config: config
};

//incoming telegram command
bot.onText(/\/(.+)/, function (msg, match) {
	var route = router.matched(match[1]);
	//now messy autoloader
	try {
		var controller = require("./controllers/" + route.command + ".js");
		controller.execute(route, msg, contexts);
	} catch (ex) {
		var fromId = msg.chat.id || msg.from.id;
		bot.sendMessage(fromId, "Unsupported command.");
	}
});

// Any kind of message
// bot.on('message', function (msg) {
// 	var fromid = msg.chat.id || msg.from.id;;
// 	console.log("Received message from " + fromid, msg);
// });