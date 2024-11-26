const { EmbedBuilder } = require('discord.js');
require('dotenv').config();

class core {
        embed() {
                const embed = new EmbedBuilder();
                embed.setFooter({text: `CombineJS v${process.env.VERSION}`, iconURL: 'https://i.postimg.cc/T3XH8Rwm/image.png'});
                return embed;
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

        async getShakespeare(text: string) {
                const r = await this.get(`https://api.funtranslations.com/translate/shakespeare.json?text=${text}`);
                return r.json();
        }

        async getRandomReddit(sub: string) {
                const r = await this.get(`https://meme-api.com/gimme/${sub}`);
                const j = r.json();
                return j;
        }
}

let CombineJS = new core();

module.exports = { CombineJS };
