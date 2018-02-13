var utils = require("../utilities/utilities.json");
var isAdmin = require("../utilities/utilities.js");
var mutedBefore;

exports.mute = function(message){
    let args = message.content.substring(utils.prefix.length).split(' ');
    if(message.author.id === "135134723629514752" || message.author.id === "252779503976316928") {
        var role = message.guild.roles.find("name", "Globally Muted");
        var member = message.mentions.members.first();

        try{
            member.addRole(role).catch(err => console.log(err.message));
        } catch (err){
            return err.message;
        }

        return "<@" + message.mentions.members.first().user.id + "> has been muted!";
    } else {
        return "Insufficient permissions!";
    }
};
exports.unmute = function(message){
    if(message.author.id === "135134723629514752" || message.author.id === "252779503976316928") {
        var role = message.guild.roles.find("name", "Globally Muted");
        var member = message.mentions.members.first();

        try{
            member.removeRole(role).then(function(){ return "<@" + message.mentions.members.first().user.id + "> has been unmuted!"; })
        } catch (err){
            return err.message;
        }

        return "<@" + message.mentions.members.first().user.id + "> has been unmuted!";
    } else {
        return "Insufficient permissions!";
    }
};

//    if(message.author.id === "135134723629514752" || message.author.id === "252779503976316928"){}