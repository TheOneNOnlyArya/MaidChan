var utils = require("../utilities/utilities.json");
var isAdmin = require("../utilities/utilities.js");


exports.avatar = function(message){



    if(message.guild.id === "332514523405615105" && isAdmin.isAdmin(message.author.id)) {
        try{
            return message.mentions.users.first().avatarURL;
        } catch (err) { return message.author.avatarURL }
    } else if(message.guild.id !== "332514523405615105") {
        try{
            return message.mentions.users.first().avatarURL;
        } catch (err) { return message.author.avatarURL }
    } else {
        return ":no_entry_sign: | Insufficient permissions!"
    }
};