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
}
];

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

const mbtiinfo = [
    {
        INTJ:{
            "type": "The Architect",
            "description": "Imaginative and strategic thinkers, with a plan for everything.",
            "funfact": "Only about 2% of the population are INTJs, making them one of the rarest personality types.",
            "stack": "Ni, Te, Fi, Se",
            "color": "#5B4E77"
        },
        INTP:{
            "type": "The Logician",
            "description": "Innovative inventors with an unquenchable thirst for knowledge.",
            "funfact": "Famous INTPs include Albert Einstein, Bill Gates, and Marie Curie.",
            "stack": "Ti, Ne, Si, Fe",
            "color": "#4E6E8E"
        },
        ENTJ:{
            "type": "The Commander",
            "description": "Bold, imaginative and strong-willed leaders, always finding a way – or making one.",
            "funfact": "ENTJs are often referred to as 'natural leaders' due to their assertive and strategic nature.",
            "stack": "Te, Ni, Se, Fi",
            "color": "#4E5D6C"
        },
        ENTP:{
            "type": "The Debater",
            "description": "Smart and curious thinkers who cannot resist an intellectual challenge.",
            "funfact": "ENTPs are known for their quick wit and love of debate, often playing devil's advocate.",
            "stack": "Ne, Ti, Fe, Si",
            "color": "#4E8E5D"
        },
        INFJ:{
            "type": "The Advocate",
            "description": "Quiet and mystical, yet very inspiring and tireless idealists.",
            "funfact": "INFJs are often described as 'old souls' due to their deep insights and empathy.",
            "stack": "Ni, Fe, Ti, Se",
            "color": "#775B4E"
        },
        INFP:{
            "type": "The Mediator",
            "description": "Poetic, kind and altruistic people, always eager to help a good cause.",
            "funfact": "INFPs are often drawn to creative pursuits such as writing, art, and music.",
            "stack": "Fi, Ne, Si, Te",
            "color": "#8E5D4E"
        },
        ENFJ:{
            "type": "The Protagonist",
            "description": "Charismatic and inspiring leaders, able to mesmerize their listeners.",
            "funfact": "ENFJs are often found in leadership roles due to their ability to connect with and inspire others.",
            "stack": "Fe, Ni, Se, Ti",
            "color": "#8E4E5D"
        },
        ENFP:{
            "type": "The Campaigner",
            "description": "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
            "funfact": "ENFPs are known for their boundless energy and enthusiasm, often inspiring those around them.",
            "stack": "Ne, Fi, Te, Si",
            "color": "#6E4E77"
        },
        ISTJ:{
            "type": "The Logistician",
            "description": "Practical and fact-minded individuals, whose reliability cannot be doubted.",
            "funfact": "ISTJs are often referred to as 'the backbone of society' due to their strong sense of duty and responsibility.",
            "stack": "Si, Te, Fi, Ne",
            "color": "#775B6E"
        },
        ISFJ:{
            "type": "The Defender",
            "description": "Very dedicated and warm protectors, always ready to defend their loved ones.",
            "funfact": "ISFJs are known for their meticulous attention to detail and strong organizational skills.",
            "stack": "Si, Fe, Ti, Ne",
            "color": "#6E5B77"
        },
        ESTJ:{
            "type": "The Executive",
            "description": "Excellent administrators, unsurpassed at managing things – or people.",
            "funfact": "ESTJs are often found in leadership roles due to their strong organizational skills and decisiveness.",
            "stack": "Te, Si, Ne, Fi",
            "color": "#5D6E77"
        },
        ESFJ:{
            "type": "The Consul",
            "description": "Extraordinarily caring, social and popular people, always eager to help.",
            "funfact": "ESFJs are often referred to as 'the caregivers' due to their nurturing and supportive nature.",
            "stack": "Fe, Si, Ne, Ti",
            "color": "#5D775B"
        },
        ISTP:{
            "type": "The Virtuoso",
            "description": "Bold and practical experimenters, masters of all kinds of tools.",
            "funfact": "ISTPs are often drawn to hands-on activities and careers, such as engineering, mechanics, and the arts.",
            "stack": "Ti, Se, Ni, Fe",
            "color": "#4E775B"
        },
        ISFP:{
            "type": "The Adventurer",
            "description": "Flexible and charming artists, always ready to explore and experience something new.",
            "funfact": "ISFPs are often known for their strong aesthetic sense and appreciation for beauty in all forms.",
            "stack": "Fi, Se, Ni, Te",
            "color": "#4E6E77"
        },
        ESTP:{
            "type": "The Entrepreneur",
            "description": "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
            "funfact": "ESTPs are often referred to as 'the doers' due to their action-oriented and spontaneous nature.",
            "stack": "Se, Ti, Fe, Ni",
            "color": "#6E4E77"
        },
        ESFP:{
            "type": "The Entertainer",
            "description": "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
            "funfact": "ESFPs are often the life of the party, known for their infectious energy and zest for life.",
            "stack": "Se, Fi, Te, Ni",
            "color": "#775B6E"
        }
    }
]

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

module.exports = { eightball_list, statuses, questions, longnames, mbtiinfo };
