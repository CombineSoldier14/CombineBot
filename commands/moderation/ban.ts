const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user.')
        .addStringOption((option: any) =>
            option
                .setName('reason')
                .setDescription('The reason for the ban')
                .setRequired(true)
        )
        .addUserOption((option: any) => 
            option
                .setName('user')
                .setDescription('The user to ban')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const user = interaction.options.getUser('user');
        const member = interaction.guild.members.cache.get(user.id);
        const reason = interaction.options.getString('reason');
        if (!member.bannable) {
            return await interaction.reply({ content: `I can't kick ${user.username}. They have a higher role than me.`, ephemeral: true });
        } else {
            await member.ban({ reason: reason });
        let embed = await CombineBot.embed();
        embed.setTitle(`Banned ${user.username}`);
        await interaction.reply({ embeds: [embed] });
        }                                                                                                                                                          
    }
}

export {};