const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setActivty('Majd #TrixMC', 'https://twich.tv/idk');
});



client.login(process.env.BOT_TOKEN);
