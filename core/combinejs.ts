const { EmbedBuilder } = require('discord.js');
const { VERSION } = require('./otherconfig.json');

const embed = new EmbedBuilder()
        .setFooter({text: `CombineJS v${VERSION}`, iconURL: 'https://i.postimg.cc/T3XH8Rwm/image.png'})

const get = async (url: string) => {
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
        return response
}

const post = async (url: string, body: string) => {
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

        return response
}

module.exports = { embed, get, post }
