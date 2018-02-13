var utils = require("../utilities/utilities.json");
var isAdmin = require("../utilities/utilities.js");
var fs = require("fs");

exports.registerAdmin = function(message){
    if (isAdmin.isAdmin(message.author.id)) {
        utils.admin[utils.admin.length] = message.content.substring(14 + utils.prefix.length);
        fs.writeFile("./utilities/utilities.json", JSON.stringify(utils));
        return "Registered <@" + message.content.substring(14 + utils.prefix.length) + "> as admin";
    } else {
        return ":no_entry_sign: | Insufficient permissions!";
    }
};
exports.registerWelcomeChannel = function(message){
    // if (isAdmin(message.author.id)) {
    //     tempChannelId = message.content.substring(23 + prefix.length);
    //     return "<#" + tempChannelId + "> is now the welcome channel";
    // } else {
    //     return ":no_entry_sign: | Insufficient permissions!";
    // }
    return ":construction: | Sorry, not ready yet...";
};
