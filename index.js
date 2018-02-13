var Discord = require('discord.js');
var logger = require('winston');

var utils = require('./utilities/utilities.json');

var commands = require('./commands.js');

const talkedRecently = new Set();

var badWords = ["nigger", "nigga", "niccer", "nicca", "nignog", "nibba", "niqqa", "niqqer", "ni:b::b:a",  "fag", "nigg3r", "n1gger", "n!gg@", "niga"];


logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client();
bot.login(utils.token);
var statusMessages = ["in " + bot.guilds.size + " guilds!"];
bot.on('ready', function () {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
    bot.user.setActivity("in " + bot.guilds.size + " guilds!");
});
//statusMessages[Math.floor(Math.random()*(statusMessages.length)+1)]
bot.on('disconnect', function (message, code) {
    logger.error('Disconnected with code: ' + code + '. Message: ' + message);
});


bot.on("error", function(e) {console.error(e)});
bot.on("warn", function(e) {console.warn(e)});
//\nIn: " + message.server.name + "
bot.on('messageDelete', function(message) {
    try {
        bot.users.get("252779503976316928").send("**A message has been deleted**\n" +
            "**Date:** " + message.createdAt + "\n" +
            "**In:** " + message.guild.name + "\n" +
            "**Channel:** " + message.channel.name + "\n" +
            "**Author:** " + message.author.username + "#" + message.author.discriminator + "\n" +
            "**Content:** " + message.content);
        if (message.guild.id === "332514523405615105")
            bot.channels.get("400672203747885057").send("A message has been deleted\n" +
                "**Date:** " + message.createdAt + "\n" +
                "**Channel:** " + message.channel.name + "\n" +
                "**Author:** " + message.author.username + "#" + message.author.discriminator + "\n" +
                "**Content:** " + message.content);
        if (message.guild.id === "175763608557453312")
            bot.channels.get("361643639593500673").send("**A message has been deleted**\n" +
                "**Date:** " + message.createdAt + "\n" +
                "**Channel:** " + message.channel.name + "\n" +
                "**Author:** " + message.author.username + "#" + message.author.discriminator + "\n" +
                "**Content:** " + message.content);
    } catch (err){
        console.log(err.message);
    }
});



bot.on('message', function(message) {
    if(message.author.bot) return;
    //addToMessages(evt, message);
    // for(var i = 0; i < badWords.length; i++){
    //     if(message.content.toLowerCase().indexOf(badWords[i]) !== -1){
    //         message.delete().then(console.log(message.author.username + "#" + message.author.discriminator + " said a bad word")).catch(function(e){console.log(e.message)});
    //         message.channel.send("<@" + message.author.id + ">, you said a bad word!");
    //     }
    // }

    if (message.content.substring(0, utils.prefix.length).toLowerCase() === (utils.prefix.toLowerCase())) {


        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Please calm down!");
            return;
        }
        talkedRecently.add(message.author.id);
        setTimeout(function() {
            talkedRecently.delete(message.author.id);
        }, 2500);
        var args = message.content.substring(utils.prefix.length).split(' ');
        var cmd = args[0].toLowerCase();
        try {
            console.log(args);
        } catch (err){
            console.log(err.message);
        }
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                message.channel.send(commands.ping(bot));
                break;
            case 'date':
                message.channel.send(commands.date());
                break;
            case 'time':
                message.channel.send(":construction: | Under construction!");
                //message.channel.send(commands.time(bot, message));
                break;
            case 'help':
                message.channel.send(commands.help(bot));//commands.help(message)
                break;
            case 'rolldice':
                message.channel.send(commands.rollDie(message, args));
                break;
            case 'avatar':
                logger.info(message.author.username + " used arya!avatar");
                message.channel.send(commands.avatar(message));
                break;
            case 'report':
                message.channel.send(commands.report(message));
                break;
            case 'registeradmin':
                message.channel.send(commands.registerAdmin(message));
                break;
            case "drink":
                message.channel.send(commands.drink(message));
                break;
            case "daily":
                message.channel.send(commands.daily(message));
                break;
            case "balance":
                message.channel.send(":yen: | You have " + commands.balance(message) + " credits!");
                break;
            case "mute":
                message.channel.send(":mute: | " + commands.mute(message));
                break;
            case "unmute":
                message.channel.send(":speaker: | " + commands.unmute(message));
                break;
            case "uptime":
                message.channel.send(commands.uptime(bot));
                break;
            case "members":
                message.channel.send(commands.members(message));
                break;
            case "prune":
                message.channel.send("Working on it!");
                break;
        }
    }
});