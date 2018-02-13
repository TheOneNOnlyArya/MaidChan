var dailies = require("../utilities/dailies.json");
var currency = require("../utilities/currency.json");
var fs = require("fs");

exports.daily = function(message) {
    if(dailies.hasOwnProperty(message.author.id)){
        return getDailies(message);
    } else {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        dailies[message.author.id] = {"lastUsedDaily": date};
        fs.writeFile("./utilities/dailies.json", JSON.stringify(dailies), (error) => { console.log(error)});
        return getDailies(message);
    }
};

exports.balance = function(message){
    return currency[message.author.id].currency;
};



function getDailies(message){
    var id = message.author.id;
    //console.log(dailies[0][id].lastUsedDaily);
    var lastUsedDailyDate = new Date(dailies[id].lastUsedDaily);
    var currentDate = new Date();
    if(currency.hasOwnProperty(message.author.id)) {
        var timeDifference = Math.abs(currentDate.getTime() - lastUsedDailyDate.getTime()) / 3600000;
        var timeText = new Date(currentDate.getTime() - lastUsedDailyDate.getTime());
        if(timeDifference < 24) {
            var hours = timeText.getHours() - 1;
            var minutes = "0" + timeText.getMinutes();
            var seconds = "0" + timeText.getSeconds();
            var formattedTime = hours + ' hours, ' + minutes.substr(-2) + ' minutes and ' + seconds.substr(-2);
            return "It's been " + formattedTime + " seconds since you've used your dailies!";
        } else {
            var date = new Date();
            dailies[message.author.id] = {"lastUsedDaily": date};
            fs.writeFile("./utilities/dailies.json", JSON.stringify(dailies), (error) => {console.log(error)});
            if(currency.hasOwnProperty(message.author.id)){
                return addDailies(message);
            }
        }
    } else {
        currency[message.author.id] = {"currency": 0};
        fs.writeFile("./utilities/currency.json", JSON.stringify(currency), (error) => {console.log(error)});
        return addDailies(message);
    }
}

function addDailies(message){
    var currentCurrency = currency[message.author.id].currency;
    var newCurrency = currentCurrency + 50;
    currency[message.author.id].currency = newCurrency;
    fs.writeFile("./utilities/currency.json", JSON.stringify(currency), (error) => {console.log(error)});
    return ":yen: | You received 50 daily credits!";
}