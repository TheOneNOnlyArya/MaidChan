var prefix = "arya!";


var avatar = require("./commands/avatar.js");
var date = require("./commands/date.js");
var drink = require("./commands/drink.js");
var help = require("./commands/help.js");
var ping = require("./commands/ping.js");
var register = require("./commands/register.js");
var report = require("./commands/report.js");
var rolldice = require("./commands/rolldice.js");
var dailies = require("./commands/dailies");
var market = require("./commands/market");
var moderation = require("./commands/moderation");
var guild = require('./commands/guild');


exports.ping = function(bot){
    return ping.ping(bot);
};
exports.date = function(){
    return date.date();
};
exports.time = function(message){
    return date.time(message);
};
exports.help = function(bot){
    return help.help(bot);
};
exports.rollDie = function(message, cmd){
    return rolldice.rollDie(message, cmd);
};
exports.avatar = function(message){
    return avatar.avatar(message);
};
exports.report = function(message){
    return report.report(message);
    //possible bug? what does it return? Might wanna change this so it sends messages to an admin
};
exports.registerAdmin = function(message){
    return register.registerAdmin(message);
};
exports.registerWelcomeChannel = function(message){
    return register.registerWelcomeChannel(message);
};
exports.drink = function(message){
    return drink.drink(message);
};
exports.daily = function(message){
    return dailies.daily(message);
};
exports.balance = function(message){
    return dailies.balance(message);
};
exports.market = function(message){
    return market.marketMenu(message);
};
exports.mute = function(message){
    return moderation.mute(message);
};
exports.unmute = function(message){
    return moderation.unmute(message);
};
exports.uptime = function(bot){
    return ping.uptime(bot);
};
exports.members = function(message){
    return guild.members(message);
};