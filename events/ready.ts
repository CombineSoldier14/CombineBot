const { Events } = require('discord.js');
const { statuses } = require('../core/lists.js');
const { ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client: any) {
		function change_status() {
			const index = Math.floor(Math.random() * (statuses.length))
			const type = statuses[index].type;
			const name = statuses[index].status;
			let activity;
			if (`${type}` == "PLAYING") {
				activity = 0;
			} else if (`${type}` == "WATCHING") {
				activity = 3;
			};
			client.user.setPresence({ 
				activities: [{ 
					name: name,
					type: activity
				}],
				status: 'online' 
			});
		}
		console.log(`Ready! Logged in as ${client.user.tag}`);
		change_status();
		setInterval(change_status, 10000);
	},
	
};
export {};
