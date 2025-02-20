const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Delete a certain amount of recent messages.')
        .addNumberOption((option: any) =>
            option
                .setName('amount')
                .setDescription('Amount of messages to delete. Must be lower than 100!')
                .setRequired(true)
        ),
    async execute(interaction) {
        const amount = interaction.options.getNumber('amount');
      
        if (amount < 1 || amount > 100) {
            return await interaction.reply({
                content: ':x: Please provide a number between 1 and 100.',
                ephemeral: true
            });
        }
      
        try {
            await interaction.channel.bulkDelete(amount, true); // 'true' filters out messages older than 14 days
            await interaction.reply({
                content: `:white_check_mark: Successfully deleted **${amount}** messages.`,
                ephemeral: true
            });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: `:x: An error occurred! Did you specify more than 100 messages?`,
                ephemeral: true
            });
        }
    }
};

export {};
