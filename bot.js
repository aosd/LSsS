const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '<@307439268731551744>') {
    msg.reply('AFK.');
  }
});


client.on('ready', () => {
    setActivty('Majd #TrixMC', 'https://twich.tv/idk');
});



client.login(process.env.BOT_TOKEN);
