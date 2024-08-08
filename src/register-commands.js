require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, Application } = require('discord.js');

const commands = [
    {
         name: 'add',
         description: 'add two numbers.',
         options: [
            {
                name: 'first-number',
                description: 'first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
         ],
    },
    {
        name: 'help',
        description: 'show all the commands'
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
console.log('Registering slash commands...');
    
    try{
        await rest.put(
            Routes.applicationGuildCommands(
            process.env.CLIENT_ID, 
            process.env.GUILD_ID),
            { body: commands }
        )


        console.log('Slash commands were registered');
    } catch (error) {
        console.log(`there was a error: ${error}`);
    }
})();