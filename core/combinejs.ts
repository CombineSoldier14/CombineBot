const { EmbedBuilder } = require('discord.js');
require('dotenv').config();

class core {
        async embed() {
                const embed = new EmbedBuilder();
                const info = await this.getBotInfo();
                embed.setFooter({text: `CombineJS v${info.VERSION}`, iconURL: 'https://i.postimg.cc/T3XH8Rwm/image.png'});
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
                                "User-Agent": "CombineJS (https://github.com/CombineSoldier14/CombineJS +combineemails14@gmail.com); curl/8.4.0",
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
                                "User-Agent": "CombineJS (https://github.com/CombineSoldier14/CombineJS +combineemails14@gmail.com); curl/8.4.0",
                                "Accept": "application/json",
                                "Upgrade-Insecure-Requests": "1",
                                "Accept-Encoding": "gzip",
                                "Connection": "close"
                        }
                })

                return response;
        }
}

let CombineJS = new core();

module.exports = { CombineJS };
