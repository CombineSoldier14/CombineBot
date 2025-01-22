const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Timeout a user')
        .addNumberOption((option: any) =>
            option.setName('time')
                .setDescription('The minutes to timeout the user for')
                .setRequired(true)
        )
        .addStringOption((option: any) =>
            option.setName('reason')
                .setDescription('The reason for the timeout')
                .setRequired(true)
    )
        .addUserOption((option: any) =>
            option.setName('user')
                .setDescription('The user to timeout')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        const member = interaction.guild.members.cache.get(user.id);
        const time = interaction.options.getNumber('time');
        if(member.kickable) {
            try {
                await member.timeout(time * 60 * 1000, reason);
            } catch (error) {
                return await interaction.reply({ content: `Failed to timeout ${user.username}. They most likely have a higher role.`, ephemeral: true });
            }
        } else {
            return await interaction.reply({ content: `I can't timeout ${user.username}. They have a higher role than me.`, ephemeral: true });
        }
        await interaction.reply(`User ${user} has been timed out for ${time} minutes for the reason: ${reason}`);
    }
}

export {};