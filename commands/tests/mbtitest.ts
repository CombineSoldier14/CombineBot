const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');
const { longnames, questions } = require('../../core/lists.js');

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
    funfact;
    famousfiction;
    message;
    thread;
    famoustype;
    iconp;
    stack;
    color;
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
        if(this.iestatus == 'I' && this.snstatus == 'N' && this.tfstatus == 'T' && this.jpstatus == 'J') {
            this.funfact = 'INTJ is the most introverted type, and is great with coming up with plans!';
            this.famousfiction = 'Emperor Palpatine and Giorno Giovanna';
            this.famoustype = 'Christopher Nolan and Michelle Obama';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.png';
            this.stack = 'Ni-Te-Fi-Se';
            this.color = 0x00CC33FF;
        } else if(this.iestatus == 'I' && this.snstatus == 'N' && this.tfstatus == 'T' && this.jpstatus == 'P') {
            this.funfact = 'INTP are the most intelligent type and are likely to be scientists!';
            this.famousfiction = 'Rick Sanchez and L Lawliet';
            this.famoustype = 'Albert Einstein and Abraham Lincoln';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/intp-logician.png';
            this.stack = 'Ti-Ne-Si-Fe';
            this.color = 0x00CC33FF;
        } else if(this.iestatus == 'I' && this.snstatus == 'S' && this.tfstatus == 'T' && this.jpstatus == 'J') {
            this.funfact = 'ISTJ is the most introverted type, and is great with coming up with plans!';
            this.famousfiction = 'Hermoine Granger and Sheldon Cooper';
            this.famoustype = 'Angela Merkel and George Washington';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/istj-logistician.png';
            this.stack = 'Si-Te-Fi-Ne';
            this.color = 0x0000FFFF;
        } else if(this.iestatus == 'I' && this.snstatus == 'S' && this.tfstatus == 'T' && this.jpstatus == 'P') {
            this.funfact = 'ISTP is the most introverted type, and is great with coming up with plans!';
            this.famousfiction = 'James Bond and Batman';
            this.famoustype = 'Clint Eastwood and Bruce Lee';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso.png';
            this.stack = 'Ti-Se-Ni-Fe';
            this.color = 0x00FFCC33;
        } else if(this.iestatus == 'I' && this.snstatus == 'N' && this.tfstatus == 'F' && this.jpstatus == 'J') {
            this.funfact = 'INFJ are the most intuitive type and are the most extroverted introverts! They tend to be very spiritual.';
            this.famousfiction = 'Frodo Baggins and Aragorn';
            this.famoustype = 'Martin Luther King Jr. and Nelson Mandela';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/infj-advocate.png';
            this.stack = 'Ni-Fe-Ti-Se';
            this.color = 0x0099FF99;
        } else if(this.iestatus == 'I' && this.snstatus == 'N' && this.tfstatus == 'F' && this.jpstatus == 'P') {
            this.funfact = 'INFP are the most popular type for fictional main characters!';
            this.famousfiction = 'Luke Skywalker and Will Byers';
            this.famoustype = 'J.R.R. Tolkien and William Shakespeare';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/infp-mediator.png';
            this.stack = 'Fi-Ne-Si-Te';
            this.color = 0x0099FF99;
        } else if(this.iestatus == 'I' && this.snstatus == 'S' && this.tfstatus == 'F' && this.jpstatus == 'J') {
            this.funfact = 'ISFJ is the most introverted type, and is great with coming up with plans!';
            this.famousfiction = 'Samwise Gamgee and Bilbo Baggins';
            this.famoustype = 'Queen Elizabeth II and Mother Teresa';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender.png';
            this.stack = 'Si-Fe-Ti-Ne';
            this.color = 0x0000FFFF;
        } else if(this.iestatus == 'I' && this.snstatus == 'S' && this.tfstatus == 'F' && this.jpstatus == 'P') {
            this.funfact = 'ISFP is the most introverted type, and is great with coming up with plans!';
            this.famousfiction = 'Jesse Pinkman and Eleven';
            this.famoustype = 'Michael Jackson and Lady Gaga';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/isfp-adventurer.png';
            this.stack = 'Fi-Se-Ni-Te';
            this.color = 0x00FFCC33;
        } else if(this.iestatus == 'E' && this.snstatus == 'N' && this.tfstatus == 'T' && this.jpstatus == 'J') {
            this.funfact = 'ENTJ is great with planning, and are most likely to be leaders.';
            this.famousfiction = 'Thanos and Light Yagami';
            this.famoustype = 'Steve Jobs and Margaret Thatcher';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/entj-commander.png';
            this.stack = 'Te-Ni-Se-Fi';
            this.color = 0x00CC33FF;
        } else if(this.iestatus == 'E' && this.snstatus == 'N' && this.tfstatus == 'T' && this.jpstatus == 'P') {
            this.funfact = 'ENTP is great at debating, and are likely to push their ideas very strongly!';
            this.famousfiction = 'Rick Sanchez and L Lawliet';
            this.famoustype = 'Thomas Edison and Leonardo da Vinci';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/entp-debater.png';
            this.stack = 'Ne-Ti-Fe-Si';
            this.color = 0x00CC33FF;
        } else if(this.iestatus == 'E' && this.snstatus == 'S' && this.tfstatus == 'T' && this.jpstatus == 'J') {
            this.funfact = 'ESTJ is the most extroverted type, and is great with coming up with plans!';
            this.famousfiction = 'Franziska von Karma and Mr. Krabs';
            this.famoustype = 'Frank Sinatra and Judge Judy';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/estj-executive.png';
            this.stack = 'Te-Si-Ne-Fi';
            this.color = 0x0000FFFF;
        } else if(this.iestatus == 'E' && this.snstatus == 'S' && this.tfstatus == 'T' && this.jpstatus == 'P') {
            this.funfact = 'ESTP is the most extroverted type, and is great with coming up with plans!';
            this.famousfiction = 'James Bond and Batman';
            this.famoustype = 'Ernest Hemingway and Madonna';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/estp-entrepreneur.png';
            this.stack = 'Se-Ti-Fe-Ni';
            this.color = 0x00FFCC33;
        } else if(this.iestatus == 'E' && this.snstatus == 'N' && this.tfstatus == 'F' && this.jpstatus == 'J') {
            this.funfact = 'ENFJ are very good and charismatic leaders!';
            this.famousfiction = 'Mike Wheeler and Homelander';
            this.famoustype = 'Oprah Winfrey and Barack Obama';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/enfj-protagonist.png';
            this.stack = 'Fe-Ni-Se-Ti';
            this.color = 0x0099FF99;
        } else if(this.iestatus == 'E' && this.snstatus == 'N' && this.tfstatus == 'F' && this.jpstatus == 'P') {
            this.funfact = 'ENFPs are great at spreading their passions, and are the most introverted extroverts!';
            this.famousfiction = 'Michael Scott and Joyce Byers';
            this.famoustype = 'Walt Disney and Robin Williams';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/enfp-campaigner.png';
            this.stack = 'Ne-Fi-Te-Si';
            this.color = 0x0099FF99;
        } else if(this.iestatus == 'E' && this.snstatus == 'S' && this.tfstatus == 'F' && this.jpstatus == 'J') {
            this.funfact = 'ESFJ is the most extroverted type, and is great with coming up with plans!';
            this.famousfiction = 'Samwise Gamgee and Bilbo Baggins';
            this.famoustype = 'Taylor Swift and Jennifer Lopez';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/esfj-consul.png';
            this.stack = 'Fe-Si-Ne-Ti';
            this.color = 0x0000FFFF;
        } else if(this.iestatus == 'E' && this.snstatus == 'S' && this.tfstatus == 'F' && this.jpstatus == 'P') {
            this.funfact = 'ESFP is the most extroverted type, and is great with coming up with plans!';
            this.famousfiction = 'Homer Simpson and Peter Griffin';
            this.famoustype = 'Marilyn Monroe and Elvis Presley';
            this.iconp = 'https://www.16personalities.com/static/images/personality-types/avatars/esfp-entertainer.png';
            this.stack = 'Se-Fi-Te-Ni';
            this.color = 0x00FFCC33;
        }
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
                { name: 'Fun Fact', value: this.funfact },
                { name: 'Famous Fictional Characters', value: this.famousfiction },
                { name: 'Famous People', value: this.famoustype },
                { name: 'Cognitive Stack', value: this.stack }
            )
            .setThumbnail(this.iconp)
            .setColor(this.color)
        const LearnMore = new ButtonBuilder()
            .setLabel(`Learn More about ${this.iestatus}${this.snstatus}${this.tfstatus}${this.jpstatus}`)
            .setStyle(ButtonStyle.Link)
            .setURL(`https://www.truity.com/blog/personality-type/${this.iestatus}${this.snstatus}${this.tfstatus}${this.jpstatus}`)
        const LearnRow = new ActionRowBuilder();
        LearnRow.addComponents(LearnMore);
        await this.thread.send({ embeds: [embed], components: [LearnRow] });
    }
    async nextQuestion(interaction, advance = true) {
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
        const collectorFilter = (i) => i.user.id === interaction.user.id;
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