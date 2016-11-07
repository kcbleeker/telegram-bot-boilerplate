var fs = require("fs");
module.exports = {
	execute: function (route, msg, ctx) {
		var fromId = msg.chat.id || msg.from.id;
		console.log("auth: " + fromId);
		if (route.params.length > 0) {
			var authuser = parseInt(route.params[0]);
			if (fromId === ctx.config.owner_id && ctx.config.users.indexOf(authuser) < 0) {
				ctx.bot.sendMessage(authuser, "You've been authorised.");
				ctx.config.users.push(authuser);
				fs.writeFileSync("config.json", JSON.stringify(ctx.config));
			}
		}
		else {
			if (ctx.config.owner_id === -1 && msg.chat.type === "private") {
				ctx.bot.sendMessage(fromId, "Setting you as owner.");
				ctx.config.owner_id = msg.chat.id;
				fs.writeFileSync("config.json", JSON.stringify(ctx.config));
			}
			else if (msg.chat.type === "private") {
				var keyboardoptions = [[{ text: "/auth " + fromId }]];
				var replymarkup = {
					keyboard: keyboardoptions,
					resize_keyboard: true,
					one_time_keyboard: true
				};
				var msgoptions = {
					disable_web_page_preview: true,
					reply_to_message: msg.message_id,
					reply_markup: replymarkup
				};
				ctx.bot.sendMessage(ctx.config.owner_id, "Authorise user: " + msg.from.first_name + " " + msg.from.last_name, msgoptions);
			}
			else {
				var keyboardoptions = [[{ text: "/auth " + fromId }]];
				var replymarkup = {
					keyboard: keyboardoptions,
					resize_keyboard: true,
					one_time_keyboard: true
				};
				var msgoptions = {
					disable_web_page_preview: true,
					reply_to_message: msg.message_id,
					reply_markup: replymarkup
				};
				ctx.bot.sendMessage(ctx.config.owner_id, "Authorise chat: " + msg.from.title);
			}
		}
	}
};