const eightball_list = ["It is certain.", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again", "Ask again later", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
const statuses = [{
    "type":"PLAYING",
    "status":"https://combinesoldier14.github.io/combinebot"
},
{
    "type":"WATCHING",
    "status":"you :)"
},
{
    "type":"PLAYING",
    "status":"in your mind"
},
{
    "type":"PLAYING",
    "status":"inside Combine's Raspberry Pi",
},
{
    "type":"PLAYING",
    "status":"in the JS interpreter",
},
{
    "type":"WATCHING",
    "status":"Ace Attorney: Dual Destinies",
}];

const questions = [
    {
        "question": "I prefer to be around others usually.",
        "yes": "E",
        "no": "I"
    },
    {
        "question": "I get more energy from my close friends than other people.",
        "yes": "I",
        "no": "E"
    },
    {
        "question": "I always love when I'm the center of attention.",
        "yes": "E",
        "no": "I"
    },
    {
        "question": "I get anxious and overwhelmed if I'm in a crowd of people for long enough.",
        "yes": "I",
        "no": "E"
    },
    {
        "question": "I am quite popular in my respective social group.",
        "yes": "E",
        "no": "I"
    },
    {
        "question": "I like to participate in sports.",
        "yes": "S",
        "no": "N"
    },
    {
        "question": "I'm always thinking about other things when I do things.",
        "yes": "N",
        "no": "S"
    },
    {
        "question": "I'm able to think quickly in intense situations.",
        "yes": "S",
        "no": "N"
    },
    {
        "question": "I like to make up stories and realities in my head.",
        "yes": "N",
        "no": "S"
    },
    {
        "question": "I like to come up with a lot of ideas.",
        "yes": "N",
        "no": "S"
    },
    {
        "question": "I am good at puzzles.",
        "yes": "T",
        "no": "F"
    },
    {
        "question": "My emotions control me more than I control them.",
        "yes": "F",
        "no": "T"
    },
    {
        "question": "I tend to feel insecure/depressed often.",
        "yes": "F",
        "no": "T"
    },
    {
        "question": "I like to focus on science and the facts rather than my own beliefs.",
        "yes": "T",
        "no": "F"
    },
    {
        "question": "I like solutions that are efficient rather then ones that make people happy.",
        "yes": "T",
        "no": "F"
    },
    {
        "question": "I like to make a lot of backup plans to make sure there's a way for everything.",
        "yes": "J",
        "no": "P"
    },
    {
        "question": "I like to just do whatever I feel like doing instead of having a schedule.",
        "yes": "P",
        "no": "J"
    },
    {
        "question": "I am always organized with access to everything.",
        "yes": "J",
        "no": "P"
    },
    {
        "question": "I get distracted very easily.",
        "yes": "P",
        "no": "J"
    },
    {
        "question": "I always want extra credit in things and go beyond what's expected of me.",
        "yes": "J",
        "no": "P"
    }
];

const longnames = [{
        'E': "Extraverted",
        'I': "Introverted",
        'N': "Intuition",
        'S': "Sensing",
        'F': "Feeling",
        'T': "Thinking",
        'P': "Perceiving",
        'J': "Judging"
    }];

module.exports = { eightball_list, statuses, questions, longnames };