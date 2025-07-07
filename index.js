const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: process.env.guild, 
       selfMute: true,
       selfDeaf: true,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.token);
