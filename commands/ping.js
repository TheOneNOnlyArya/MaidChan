exports.ping = function(bot){
    return ':ping_pong: | Pong! `' + bot.ping + ' ms`';
    //const m = await message.channel.send("Ping?");
    //m.edit('Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms');
};
exports.uptime = function(bot){
    var time = bot.uptime / 1000;
    var hours = Math.floor(time /  3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    var seconds = time;
    return "Uptime: " + hours + " hours, " + minutes + " minutes, " + Math.round(seconds) + " seconds";
};
