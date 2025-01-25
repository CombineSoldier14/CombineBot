const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Shows detailed info on the server you\'re in'),
    async execute (interaction: any) {
            const owner = await interaction.guild.fetchOwner();
            let embed = await CombineBot.embed();
            embed.setTitle(`Info on ${interaction.guild.name}`);
            embed.setFields(
                { name: 'Name', value: (interaction.guild.name).toString() },
                { name: 'ID', value: (interaction.guild.id).toString() },
                { name: 'Owner', value: (owner.displayName).toString() },
                { name: 'Members', value: (interaction.guild.memberCount).toString() },
                { name: 'Created at', value: (interaction.guild.createdAt).toString() }
            );
            if(interaction.guild.icon != null) {
                embed.setThumbnail(`https://cdn.discordapp.com/icons/${interaction.guild.id}/${interaction.guild.icon}.png?size=1024`);
            }
            embed.setColor(0xffd700);
        await interaction.reply({ embeds: [embed] });
    },
};
export {};
