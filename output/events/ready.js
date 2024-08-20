"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Events } = require('discord.js');
const { statuses } = require('../statuses.js');
const { ActivityType } = require('discord.js');
;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
;
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Ready! Logged in as ${client.user.tag}`);
            for (let status in statuses) {
                if (statuses[status].type == "PLAYING") {
                    var truetype = ActivityType.Playing;
                }
                else {
                    var truetype = ActivityType.Watching;
                }
                ;
                client.user.setPresence({
                    activities: [{
                            name: statuses[status].status,
                            type: truetype
                        }],
                    status: 'online'
                });
                yield sleep(30000);
            }
            ;
        });
    },
};
//# sourceMappingURL=ready.js.map