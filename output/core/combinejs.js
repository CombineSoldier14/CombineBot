var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { EmbedBuilder } = require('discord.js');
require('dotenv').config();
const embed = new EmbedBuilder()
    .setFooter({ text: `CombineJS v${process.env.VERSION}`, iconURL: 'https://i.postimg.cc/T3XH8Rwm/image.png' });
const get = (url) => __awaiter(this, void 0, void 0, function* () {
    var response = yield fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "User-Agent": "CombineJS (https://github.com/CombineSoldier14/CombineJS +combineemails14@gmail.com); curl/8.4.0",
            "Accept": "application/json",
            "Upgrade-Insecure-Requests": "1",
            "Accept-Encoding": "gzip",
            "Connection": "close"
        }
    });
    return response;
});
const post = (url, body) => __awaiter(this, void 0, void 0, function* () {
    var response = yield fetch(url, {
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
    });
    return response;
});
module.exports = { embed, get, post };
//# sourceMappingURL=combinejs.js.map