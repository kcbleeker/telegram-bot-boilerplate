//controllers
//each route needs to accept (routeObject, TelegramMessage, contexts)
//shorthand: (route, msg, ctx)
//
// route object sample: 
// { 
//     command: "echo",
//     text: "Hello bot",
//     paramsArray: [
//         "Hello",
//         "bot"
//     ]
// } 
module.exports = {
    execute: function (route, msg, ctx) {
        if (route.text.length > 0) {
            var fromId = msg.chat.id || msg.from.id;
            console.log("echo: " + route.text);
            ctx.bot.sendMessage(fromId, route.text);
        }
    }
};