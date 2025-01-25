const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

if (process.env.NODE_ENV !== 'production') {
	console.warn('Loading .env file in development mode.');
	require('dotenv').config();
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.error(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter((file: any) => file.endsWith(".js"));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args: any[]) => event.execute(...args));
	} else {
		client.on(event.name, (...args: any[]) => event.execute(...args));
	}
};

client
    .on("debug", console.log)
    .on("warn", console.log)

	// testing message listeners for future SQL integration

	/*
	.on('messageCreate', async (message) => {
		if (message.author.bot){ return };
		console.log("cool");
		await message.channel.send('cool');
	});
	*/

client.login(process.env.TOKEN);
export {};
