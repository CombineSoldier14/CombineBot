import discord
from discord.ext import commands
import os
import json
import cogs.combinebot
from cogs.combinebot import name
from cogs.combinebot import game
from cogs.combinebot import icon
from cogs.combinebot import VERSION
from cogs.combinebot import LATESTADDITION


class Mbti(commands.Cog):
    group = discord.SlashCommandGroup(name="mbti", description="Commands relating to the Myers-Briggs Type Indicator personality system")
    def __init__(self, bot):
        self.bot = bot
        self._last_member = None
        self.dict = {
            "mbti":"INTJ",
            "most1":"introverted",
            "most2":"introvert"
        },
        

       

    @group.command(title="disc2mbti", description="Converts your Indigo DISC scores into MBTI personality types!")
    async def disc2mbti(self, interaction, d: discord.Option(int, description="Your Dominance Score"), i: discord.Option(int, description="Your Influence Score"), s: discord.Option(int, description="Your Steadiness Score"), c: discord.Option(int, description="Your Compliance Score")):
        
       
        if i >= 50:
            IE = "E"
            longIE = "Extraverted"
        else:
            IE = "I"
            longIE = "Introverted"
        
        if c >= 50:
            SN = "S"
            longSN = "Sensing"
        else:
            SN = "N"
            longSN = "Intuitive"
        
        if d >= 50:
            TF = "T"
            longTF = "Thinking"
        else:
            TF = "F"
            longTF = "Feeling"
        
        if s >= 50:
            PJ = "J"
            longPJ = "Judging"
        else:
            PJ = "P"
            longPJ = "Perceiving"

        await interaction.response.send_message("Your MBTI is: {0}{1}{2}{3}".format(IE, SN, TF, PJ))
        await interaction.send("_({0}, {1}, {2}, and {3})_".format(longIE, longSN, longTF, longPJ))

    

    @group.command(name="mostmbti", description="A command to find what the most (blank) MBTI is!")
    async def mostmbti(self, interaction, most1: discord.Option(str, description="The first option to find what the most (blank) (blank) MBTI is!", choices=["introverted", "extroverted", "intuitive", "sensing", "thinking", "feeling", "perceiving", "judging"]), most2: discord.Option(str, description="The second option to find what the most (blank) (blank) MBTI is!", choices=["introvert", "extrovert", "intuitive", "senser", "thinker", "feeler", "perceiver", "judger"])):
        mbti = "undefined"
        
        if most1 == "introverted" and most2 == "introvert":
            mbti = "INTJ"

        if most1 == "introverted" and most2 == "extrovert":
            mbti = "ENFP"

        if most1 == "introverted" and most2 == "intuitive":
            mbti = "INTJ"

        if most1 == "introverted" and most2 == "senser":
            mbti = "ISTP"

        if most1 == "introverted" and most2 == "thinker":
            mbti = "INTJ"

        if most1 == "introverted" and most2 == "feeler":
            mbti = "INFP"

        if most1 == "introverted" and most2 == "perceiver":
            mbti = "INTP"

        if most1 == "introverted" and most2 == "judger":
            mbti = "INTJ"

        if most1 == "extroverted" and most2 == "introvert":
            mbti = "INFJ"

        if most1 == "extroverted" and most2 == "extrovert":
            mbti = "ESTP"

        if most1 == "extroverted" and most2 == "intuitive":
            mbti = "ENFJ"

        if most1 == "extroverted" and most2 == "senser":
            mbti = "ESTP"

        if most1 == "extroverted" and most2 == "thinker":
            mbti = "ESTP"

        if most1 == "extroverted" and most2 == "feeler":
            mbti = "ESFP"

        if most1 == "extroverted" and most2 == "perceiver":
            mbti = "ESTP"

        if most1 == "extroverted" and most2 == "judger":
            mbti = "ENFJ"

        if most1 == "intuitive" and most2 == "introvert":
            mbti = "INFJ"

        if most1 == "intuitive" and most2 == "extrovert":
            mbti = "ENTP"

        if most1 == "intuitive" and most2 == "intuitive":
            mbti = "INFJ"

        if most1 == "intuitive" and most2 == "senser":
            mbti = "ISTP"

        if most1 == "intuitive" and most2 == "thinker":
            mbti = "INTP"

        if most1 == "intuitive" and most2 == "feeler":
            mbti = "INFJ"

        if most1 == "intuitive" and most2 == "perceiver":
            mbti = "INTP"

        if most1 == "intuitive" and most2 == "judger":
            mbti = "INFJ"

        if most1 == "sensing" and most2 == "introvert":
            mbti = "ISTJ"

        if most1 == "sensing" and most2 == "extrovert":
            mbti = "ESTP"

        if most1 == "sensing" and most2 == "intuitive":
            mbti = "ENTJ"

        if most1 == "sensing" and most2 == "senser":
            mbti = "ESTP"

        if most1 == "sensing" and most2 == "thinker":
            mbti = "ESTP"

        if most1 == "sensing" and most2 == "feeler":
            mbti = "ESFP"

        if most1 == "sensing" and most2 == "perceiver":
            mbti = "ESTP"

        if most1 == "sensing" and most2 == "judger":
            mbti = "ISTJ"

        if most1 == "thinking" and most2 == "introvert":
            mbti = "INTP"

        if most1 == "thinking" and most2 == "extrovert":
            mbti = "ENTJ"

        if most1 == "thinking" and most2 == "intuitive":
            mbti = "INTP"

        if most1 == "thinking" and most2 == "senser":
            mbti = "ISTJ"

        if most1 == "thinking" and most2 == "thinker":
            mbti = "INTP"

        if most1 == "thinking" and most2 == "feeler":
            mbti = "INFJ"

        if most1 == "thinking" and most2 == "perceiver":
            mbti = "INTP"

        if most1 == "thinking" and most2 == "judger":
            mbti = "INTJ"

        if most1 == "feeling" and most2 == "introvert":
            mbti = "ISFJ"

        if most1 == "feeling" and most2 == "extrovert":
            mbti = "ESFP"

        if most1 == "feeling" and most2 == "intuitive":
            mbti = "INFP"

        if most1 == "feeling" and most2 == "senser":
            mbti = "ESFP"

        if most1 == "feeling" and most2 == "thinker":
            mbti = "ESTP"

        if most1 == "feeling" and most2 == "feeler":
            mbti = "ESFP"

        if most1 == "feeling" and most2 == "perceiver":
            mbti = "ESFP"

        if most1 == "feeling" and most2 == "judger":
            mbti = "ENFJ"

        if most1 == "perceiving" and most2 == "introvert":
            mbti = "INTP"

        if most1 == "perceiving" and most2 == "extrovert":
            mbti = "ESFP"

        if most1 == "perceiving" and most2 == "intuitive":
            mbti = "INTP"

        if most1 == "perceiving" and most2 == "senser":
            mbti = "ESFP"

        if most1 == "perceiving" and most2 == "thinker":
            mbti = "INTP"

        if most1 == "perceiving" and most2 == "feeler":
            mbti = "ESFP"

        if most1 == "perceiving" and most2 == "perceiver":
            mbti = "ESFP"

        if most1 == "perceiving" and most2 == "judger":
            mbti = "ENFJ"

        if most1 == "judging" and most2 == "introvert":
            mbti = "INTJ"

        if most1 == "judging" and most2 == "extrovert":
            mbti = "ENTJ"

        if most1 == "judging" and most2 == "intuitive":
            mbti = "ENTJ"

        if most1 == "judging" and most2 == "senser":
            mbti = "ESTJ"

        if most1 == "judging" and most2 == "thinker":
            mbti = "INTJ"

        if most1 == "judging" and most2 == "feeler":
            mbti = "ESFJ"

        if most1 == "judging" and most2 == "perceiver":
            mbti = "ISFP"

        if most1 == "judging" and most2 == "judger":
            mbti = "ENTJ"


        


        

        

        

        

        await interaction.response.send_message("The most {0} {1} is **{2}**".format(most1, most2, mbti))
        




     



    
     


def setup(bot): # this is called by Pycord to setup the cog
    bot.add_cog(Mbti(bot)) # add the cog to the bot

