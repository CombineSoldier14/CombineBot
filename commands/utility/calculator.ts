const { SlashCommandBuilder } = require('discord.js');
const Parser = require('expr-eval').Parser;
const parser = new Parser()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('calculator')
        .setDescription('Calculate a math expression')
        .addStringOption((option: any) =>
            option
                .setName('expression')
                .setDescription('Math expression to calculate.')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        let expression = `${interaction.options.getString('expression')}`;
        expression = expression.replace(' ', '');
        let final = parser.parse(expression);
        interaction.reply(`${final.evaluate()}`);
    }
}