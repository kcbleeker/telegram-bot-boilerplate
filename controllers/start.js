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
        var fromId = msg.chat.id || msg.from.id;
        console.log("start: " + fromId);
        ctx.bot.sendMessage(fromId, "Started.");
    }
};