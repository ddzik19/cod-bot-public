/** 
    Author: Damian Dzik
    Date: 22/01/2022
    Updated: 30/01/2022
**/

// basic setup stuff ---------
// allowing us to get the token from the .env file
require('dotenv').config();
const Discord = require('discord.js');
const {
    Client,
    Intents,
    MessageEmbed,
    MessageAttachment
} = require('discord.js')
const client = new Client({
    restTimeOffset: 0,
    intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})
// needed to access the json file that contains all the guns
const gunBuilds = require("./guns.json")
// assigning the array of guns from the json file to the guns variable
let guns = gunBuilds.guns;
//----------------------------

// creating a file sync reader to read files
const fs = require('fs');

// creating a new collection of commands
client.commands = new Discord.Collection();

// getting all command files 
const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

// looping through files in commands and adding the commands into a collection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// when bot is logged in display message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

// commands
// the prefix of each command
const prefix = "!"
client.on("messageCreate", msg => {
    const args = msg.content.trim().split('.');
    const command = args[0].toLowerCase();

    // check if the message author is the bot or does the message start with a prefix
    if (msg.author.bot || !msg.content.startsWith(prefix)) return

    try {
        // responsible for warzone commands
        if (command === "!wz") {
            // if the command is wz then get arg[1] and check if command exists
            client.commands.get(args[1].toLowerCase()).execute(msg);
        }
        // listing all the viable guns
        if (command === "!cod") {
            // if the command is cod then get arg[1] and check if command exists
            client.commands.get(args[1].toLowerCase()).execute(msg);
        }
        // display the gun build that was asked for
        if (command === "!build") {
            // creating embed and attachment variables
            var embed
            var attachment
            if (args[1] != null) {
                for (var i = 0; i < guns.length; i++) {
                    // checking if the args[1] is the same as the name of a gun
                    if (guns[i].tag === "cw" || guns[i].tag === "mw") {
                        if (args[1] == guns[i].name) {
                            attachment = new MessageAttachment(guns[i].image)
                            embed = new MessageEmbed()
                                .setColor(guns[i].color)
                                .setTitle(guns[i].title)
                                .setDescription(guns[i].desc)
                                // short represents the name of the file without a path to the fileexample:
                                // instead of ./images/mp5.png
                                // it is mp5.png
                                .setImage(url = `attachment://${guns[i].short}`)
                                // filling out the fields with the json data 
                                .addFields({
                                    // getting the name, value and inline from json file
                                    name: guns[i].attachments[0].name,
                                    value: guns[i].attachments[0].value,
                                    inline: guns[i].attachments[0].inline
                                }, {
                                    name: guns[i].attachments[1].name,
                                    value: guns[i].attachments[1].value,
                                    inline: guns[i].attachments[1].inline
                                }, {
                                    name: guns[i].attachments[2].name,
                                    value: guns[i].attachments[2].value,
                                    inline: guns[i].attachments[2].inline
                                }, {
                                    name: guns[i].attachments[3].name,
                                    value: guns[i].attachments[3].value,
                                    inline: guns[i].attachments[3].inline
                                }, {
                                    name: guns[i].attachments[4].name,
                                    value: guns[i].attachments[4].value,
                                    inline: guns[i].attachments[4].inline
                                }, {
                                    name: "\u200B",// \u200B is a blank space
                                    value: "\u200B",
                                    inline: true
                                })
                        }
                    } // checking if the gun is a vanguard gun 
                    else if (guns[i].tag === "vg") {
                        // will have many more attachment fields
                        if (args[1] == guns[i].name) {
                            attachment = new MessageAttachment(guns[i].image)
                            embed = new MessageEmbed()
                                .setColor(guns[i].color)
                                .setTitle(guns[i].title)
                                .setDescription(guns[i].desc)
                                // short represents the name of the file without a path to the fileexample:
                                // instead of ./images/mp5.png
                                // it is mp5.png
                                .setImage(url = `attachment://${guns[i].short}`)
                                // filling out the fields with the json data 
                                .addFields({
                                    // getting the name, value and inline from json file
                                    name: guns[i].attachments[0].name,
                                    value: guns[i].attachments[0].value,
                                    inline: guns[i].attachments[0].inline
                                }, {
                                    name: guns[i].attachments[1].name,
                                    value: guns[i].attachments[1].value,
                                    inline: guns[i].attachments[1].inline
                                }, {
                                    name: guns[i].attachments[2].name,
                                    value: guns[i].attachments[2].value,
                                    inline: guns[i].attachments[2].inline
                                }, {
                                    name: guns[i].attachments[3].name,
                                    value: guns[i].attachments[3].value,
                                    inline: guns[i].attachments[3].inline
                                }, {
                                    name: guns[i].attachments[4].name,
                                    value: guns[i].attachments[4].value,
                                    inline: guns[i].attachments[4].inline
                                }, {
                                    name: guns[i].attachments[5].name,
                                    value: guns[i].attachments[5].value,
                                    inline: guns[i].attachments[5].inline
                                }, {
                                    name: guns[i].attachments[6].name,
                                    value: guns[i].attachments[6].value,
                                    inline: guns[i].attachments[6].inline
                                }, {
                                    name: guns[i].attachments[7].name,
                                    value: guns[i].attachments[7].value,
                                    inline: guns[i].attachments[7].inline
                                }, {
                                    name: guns[i].attachments[8].name,
                                    value: guns[i].attachments[8].value,
                                    inline: guns[i].attachments[8].inline
                                }, {
                                    name: guns[i].attachments[9].name,
                                    value: guns[i].attachments[9].value,
                                    inline: guns[i].attachments[9].inline
                                })
                        }
                    }
                }
            }
            msg.channel.send({
                files: [attachment],
                embeds: [embed]
            })
        }
    } catch (error) {
        msg.channel.send("Type !cod.help in chat to see all the commands.")
    }
});

(async () => {
    client.login(process.env.TOKEN)
})();