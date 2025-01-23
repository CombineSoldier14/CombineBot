const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('channelinfo')
        .setDescription('Get information about a given channel in the server.')
        .addChannelOption((option: any) => 
            option.setName('channel')
                .setDescription('The channel to get information about.')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const channel = interaction.options.getChannel('channel');
        let embed = await CombineBot.embed();
        embed.setTitle('Info on ' + channel.name);
        embed.setFields(
                { name: 'Channel ID', value: (channel.id).toString() },
                { name: 'Channel Type', value: (channel.type).toString() },
                { name: 'Created at', value: (channel.createdAt).toString() },
                { name: 'Is NSFW?', value: (channel.nsfw).toString() }
        );
        await interaction.reply({ embeds: [embed] });
    }
}

export {};