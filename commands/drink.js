var isAdmin = require("../utilities/utilities.js");

exports.drink = function(message) {
    // if(isAdmin.isAdmin(message.author.id)){
    //     return "One :" + getRandomDrink() + ": for " + message.mentions.members.first() + "!";
    // } else {
    //     return ":no_entry_sign: | Insufficient permissions!";
    // }
    try {
        if (message.mentions.members.first().id === "74098300449468416")
            return "One :milk: for " + message.mentions.members.first() + " because she is still underage~";

        if (message.mentions.members.first().id === "367875794502156289" || message.mentions.members.first().id === "165752180576485383")
            return "One :milk: for " + message.mentions.members.first() + " because he doesn't drink alcohol";

        if (message.mentions.members.first().id === message.author.id)
            return "A lonely drinker eh? Have a :" + getRandomDrink() + ":";

        if (message.mentions.members.first().id === "243212813257015296")
            return "One :milk: for " + message.mentions.members.first() + " because cats don't do well with alcohol~";

        return "One :" + getRandomDrink() + ": for " + message.mentions.members.first() + "!";
    } catch (err) {
        return ":exclamation: | " + err.message;
    }
};


function getRandomDrink() {
    var drinks = ["coffee", "wine_glass", "beer", "tropical_drink", "tumbler_glass", "cocktail", "sake", "milk", "tea"];
    return drinks[(Math.floor(Math.random() * 7))];
}


//This is a joke for Myrthe
