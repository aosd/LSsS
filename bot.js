const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => { 
  console.log(`Loggen in As ${client.user.username}`)
 client.user.setGame(`#Majd,TrixMC ${client.guilds.size} Guild's`, "https://twitch.tv/TrixMC")
 client.user.setStatus(`Idle`)
});



client.login(process.env.BOT_TOKEN);
