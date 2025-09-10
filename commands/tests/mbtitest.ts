const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');
const { longnames, questions, mbtiinfo } = require('../../core/lists.js');

class Buttons{

    ExtremelyAgree = new ButtonBuilder()
		.setCustomId('extremeAgree')
		.setLabel('Extremely Agree')
		.setStyle(ButtonStyle.Success)

    KindaAgree = new ButtonBuilder()
		.setCustomId('kindaAgree')
		.setLabel('Kinda Agree')
		.setStyle(ButtonStyle.Success)

    Neutral = new ButtonBuilder()
		.setCustomId('neutral')
		.setLabel('Neutral')
		.setStyle(ButtonStyle.Secondary)

    KindaDisagree = new ButtonBuilder()
		.setCustomId('kindaDisagree')
		.setLabel('Kinda Disagree')
		.setStyle(ButtonStyle.Danger)

    ExtremelyDisagree = new ButtonBuilder()
		.setCustomId('extremeDisagree')
		.setLabel('Extremely Disagree')
		.setStyle(ButtonStyle.Danger)
}

class Mbtitest {
    currentQuestion: number = 0;
    stats = {
        E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, P: 0, J: 0
    };
    iestatus;
    snstatus;
    tfstatus;
    jpstatus;
    message;
    thread;
    question = questions[this.currentQuestion];
    async start(interaction: any) {
        this.message = await interaction.channel.send("Please continue in this thread.");
        this.thread = await interaction.channel.threads.create({
            name: `${interaction.user.username}'s MBTI test`,
            autoArchiveDuration: 60,
            reason: 'MBTI test thread',
        });
        const embed = await CombineBot.embed();
        embed.setTitle(`MBTI Test`)
            .setDescription(`Welcome to the MBTI Test! This test will help you determine your MBTI type. Please answer the following questions as honestly as possible. There are 9 questions in total.`)
        await this.nextQuestion(interaction, false);
    }
    async showResults(interaction: any) {
        this.iestatus = (this.stats.E || 0) >= (this.stats.I || 0) ? 'E' : 'I';
        this.snstatus = (this.stats.S || 0) >= (this.stats.N || 0) ? 'S' : 'N';
        this.tfstatus = (this.stats.T || 0) >= (this.stats.F || 0) ? 'T' : 'F';
        this.jpstatus = (this.stats.J || 0) >= (this.stats.P || 0) ? 'J' : 'P';
        const mbtiinfoEntry = mbtiinfo[0][this.iestatus + this.snstatus + this.tfstatus + this.jpstatus];
        let embed = await CombineBot.embed();
        embed.setTitle(`Your MBTI: ${this.iestatus}${this.snstatus}${this.tfstatus}${this.jpstatus}`)
            .setDescription(`_${longnames[0][this.iestatus]}, ${longnames[0][this.snstatus]}, ${longnames[0][this.tfstatus]} and ${longnames[0][this.jpstatus]}_\n
**Scores:**
Introverted (I) Score: **${this.stats.I}**\n
Extroverted (E) Score: **${this.stats.E}**\n
Sensing (S) Score: **${this.stats.S}**\n
Intuitive (N) Score: **${this.stats.N}**\n
Thinking (T) Score: **${this.stats.T}**\n
Feeling (F) Score: **${this.stats.F}**\n
Judging (J) Score: **${this.stats.J}**\n
Perceiving (P) Score: **${this.stats.P}**`)
            .addFields(
                { name: `Type: ${mbtiinfoEntry.type}`, value: mbtiinfoEntry.description },
                { name: `Fun Fact:`, value: mbtiinfoEntry.funfact },
                { name: `Cognitive Stack:`, value: mbtiinfoEntry.stack }
            )
            .setThumbnail(mbtiinfoEntry.icon)
            .setColor(mbtiinfoEntry.color);
        const LearnMore = new ButtonBuilder()
            .setLabel(`Learn More about ${this.iestatus}${this.snstatus}${this.tfstatus}${this.jpstatus}`)
            .setStyle(ButtonStyle.Link)
            .setURL(`https://www.truity.com/blog/personality-type/${this.iestatus}${this.snstatus}${this.tfstatus}${this.jpstatus}`)
        const LearnRow = new ActionRowBuilder();
        LearnRow.addComponents(LearnMore);
        await this.thread.send({ embeds: [embed], components: [LearnRow] });
    }
    async nextQuestion(interaction: any, advance = true) {
        if (this.currentQuestion >= questions.length - 1) {
            await this.showResults(interaction);
            return;
        }
        if (advance) {
            this.currentQuestion++;
        }
    
        this.question = questions[this.currentQuestion];
        const buttons = new Buttons();
        const row = new ActionRowBuilder()
            .addComponents(buttons.ExtremelyAgree, buttons.KindaAgree, buttons.Neutral, buttons.KindaDisagree, buttons.ExtremelyDisagree);
        let embed = await CombineBot.embed();
        embed.setTitle(`Question ${this.currentQuestion + 1}/20`)
            .setDescription(`${this.question.question}`);
        const response = await this.thread.send({
            embeds: [embed],
            components: [row]
        });
        const collectorFilter = (i: any) => i.user.id === interaction.user.id;
        const answer = await response.awaitMessageComponent({ filter: collectorFilter });
        await answer.deferUpdate();
        if(answer.customId === 'extremeAgree') {
            this.stats[this.question.yes] += 2;
        } else if(answer.customId === 'kindaAgree') {         
            this.stats[this.question.yes] += 1.5;
        } else if(answer.customId === 'neutral') {
            this.stats[this.question.yes] += 1;
            this.stats[this.question.no] += 1;
        } else if(answer.customId === 'kindaDisagree') {
            this.stats[this.question.no] += 1.5;
        } else if(answer.customId === 'extremeDisagree') {
            this.stats[this.question.no] += 2;
        }
        await this.nextQuestion(interaction);
    }    
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mbtitest')
        .setDescription('Take the Myers-Briggs Type Indicator test!'),
    async execute(interaction: any) {
        await interaction.reply('Test Started!');
        let mbti = new Mbtitest();
        await mbti.start(interaction);
    },
};

export {};