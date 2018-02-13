exports.help = function(bot) {

        return {embed: {
                color: 3447003,
                    author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "Help menu",
                    description: "This is a test embed to showcase what they look like and what they can do.",
                    fields: [
                        {
                            name: "Ping",
                            value: "Pong! Makes me return the API latency"
                        },
                        {
                            name: "Date",
                            value: "Displays the current date"
                        },
                        {
                            name: "Time",
                            value: "Displays my current time"
                        },
                        {
                            name: "Rolldice",
                            value: "I'll roll a dice for you, a D20 for example"
                        },
                        {
                            name: "Avatar",
                            value: "Returns the URL for your avatar"
                        },
                        {
                            name: "Drink",
                            value: "Gives the mentioned user a drink!"
                        },
                        {
                            name: "Daily",
                            value: "Get your daily credits! Only once per 24 hour"
                        },
                        {
                            name: "Balance",
                            value: "Gets your total credit balance"
                        },
                        {
                            name: "Uptime",
                            value: "Displays how long I've been active"
                        },
                        {
                            name: "Members",
                            value: "Have me count the total amount of users in this server"
                        }

                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: 'Made by Artemis#0197'
                    }
                }
            }
};
