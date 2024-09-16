const { Events } = require('discord.js');
const { statuses } = require('../statuses.js');
const { ActivityType } = require('discord.js');;

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client: any) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
				client.user.setPresence({ 
					activities: [{ 
						name: "https://combinesoldier14.site/combinebot", 
						type: ActivityType.Playing
					}],
					status: 'online' 
				});
	},
};
export {};
