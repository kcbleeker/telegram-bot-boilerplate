module.exports = {
    execute: function (route, msg, ctx) {
        var fromId = msg.chat.id || msg.from.id;
        console.log("clear: " + fromId);
        ctx.bot.sendMessage(fromId, "Cleared", { keyboard: { hide_keyboard: true } });
    }
};