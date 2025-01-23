const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Shows detailed info on a user')
        .addUserOption((option: any) =>
            option
                .setName('user')
                .setDescription('User to get info on')
                .setRequired(true)
        ),
    async execute (interaction: any) {
        const user = interaction.options.getUser('user');
            let embed = await CombineBot.embed();
            embed.setTitle(`Info on ${user.username}`);
            embed.setFields(
                { name: 'Display Name', value: (user.displayName).toString() },
                { name: 'Created at', value: (user.createdAt).toString() },
                { name: 'ID', value: (user.id).toString() },
                { name: 'Tag', value: (user.tag).toString() },
                { name: 'Is a Bot?', value: (user.bot).toString() }
            );
            embed.setThumbnail(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`);
            embed.setColor(0xffd700);
        await interaction.reply({ embeds: [embed] });
    },
};
export {};
