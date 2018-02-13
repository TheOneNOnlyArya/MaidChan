var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus', 'September', 'October', 'November', 'December'];
var prefix = require('../utilities/utilities.json').prefix;

var string;
var string2;

exports.date = function() {
    var d = new Date();
    return ":calendar_spiral: | **The date of today is the " + getGetOrdinal(d.getDate()) + " of " + months[d.getMonth()] + "!**"
};
exports.time = function(message) {
    var d = new Date();
    var myTimeZone = 2;
    var timezone = parseInt(message.content.substring(5 + prefix.length));
    var hours = (d.getHours() - myTimeZone) + timezone;
    if(d.getMinutes() < 10){
        if(isNaN(timezone))
            string = ":clock12: | **The current time is " + d.getHours() + ":0" + d.getMinutes() + ""
        else
            string = ":clock12: | **The current time is " + (hours < 0 ? (24 - hours) : hours) + ":0" + d.getMinutes() + ""
    } else {
        if(isNaN(timezone))
            string = ":clock12: | **The current time is " + d.getHours() + ":" + d.getMinutes() + ""
        else
            string = ":clock12: | **The current time is " + (hours < 0 ? (24 - hours) : hours) + ":" + d.getMinutes() + ""
    }

    if(d.getHours()<12){
        if(d.getMinutes() < 10)
            string2 = " \`" + d.getHours() + ":0" + d.getMinutes() + "AM\`";
        else
            string2 = " \`" + d.getHours() + ":" + d.getMinutes() + "AM\`";
    } else {
        if(d.getMinutes() < 10)
            string2 = " \`" + ((d.getHours() - myTimeZone + timezone) - 12) + ":0" + d.getMinutes() + "PM\`";
        else
            string2 = " \`" + ((d.getHours() - myTimeZone + timezone) - 12) + ":" + d.getMinutes() + "PM\`";
    }

    return string + "**" + string2;
};


function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
}
