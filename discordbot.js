const Discord = require('discord.js');
const Client = new Discord.Client();
Client.on("ready", ()=>{
	console.log("ready!");
});

Client.on("message", (message)=> {
    if (message.content.startsWith("!search")) {
    message.channel.send("pong!");
	message.channel.send("pong!");
  }
});
Client.login("Mzc4NTk1Njc5NzUwMDYyMDgx.DP-dsA.5palAk_mPGrV32Tru1rwAaP12gw");

