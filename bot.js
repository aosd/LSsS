const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '<@307439268731551744>') {
    msg.reply('AFK.');
  }
});


client.user.setGame(`24 Hours,AFK`)



client.login(process.env.BOT_TOKEN);
