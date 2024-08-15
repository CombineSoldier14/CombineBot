const { Events } = require('discord.js');
const { statuses } = require('./statuses.js');
const { ActivityType } = require('discord.js');;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		for (let status in statuses) {
			if (statuses[status].type == "PLAYING") {
				var truetype = ActivityType.Playing;
			} else {
				var truetype = ActivityType.Watching;
			};
			client.user.setPresence({ 
				activities: [{ 
					name: statuses[status].status, 
					type: truetype
				}],
				status: 'online' 
			});
			await sleep(30000);
		};
	},
};
