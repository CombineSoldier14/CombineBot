const { EmbedBuilder } = require('discord.js');
require('dotenv').config();

class core {
        async embed() {
                const embed = new EmbedBuilder();
                const info = await this.getBotInfo();
                const { ICON } = require('../info.json');
                embed.setFooter({text: `CombineBot v${info.VERSION}`, iconURL: ICON});
                embed.setColor(0xffd700);
                return embed;
        }

        async getBotInfo() {
                const j = require('../info.json');
                return j;
        }

        async get(url: string) {
                var response = await fetch(url, {
                        headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                "User-Agent": "CombineBot (https://github.com/CombineSoldier14/CombineBot +combineemails14@gmail.com); curl/8.4.0",
                                "Accept": "application/json",
                                "Upgrade-Insecure-Requests": "1",
                                "Accept-Encoding": "gzip",
                                "Connection": "close"
                        }
                })
                return response;
        }

        async post (url: string, body: object) {
                var response = await fetch(url, {
                        method: "POST",
		        body: JSON.stringify(body),
                        headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                "User-Agent": "CombineBot (https://github.com/CombineSoldier14/CombineBot +combineemails14@gmail.com); curl/8.4.0",
                                "Accept": "application/json",
                                "Upgrade-Insecure-Requests": "1",
                                "Accept-Encoding": "gzip",
                                "Connection": "close"
                        }
                })

                return response;
        }
}

let CombineBot = new core();

module.exports = { CombineBot };
