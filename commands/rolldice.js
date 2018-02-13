var prefix = require("../utilities/utilities.json").prefix;

exports.rollDie = function(message, args) {
    var dice = args[0].toLowerCase();
    var patt = new RegExp('[d][0-9]{1,}');
    if(patt.test(dice)) {
        return "<@" + message.author.id + "> rolled a " + (Math.floor(Math.random() * (dice.substring(1) - 1 + 1)) + 1);
    } else {
        return ":game_die: | Usage is command + D[number]";
    }
};