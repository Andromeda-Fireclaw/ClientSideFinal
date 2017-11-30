//code is super barebones atm. Just placeholders until DB is ready
const Discord = require('discord.js');
const Client = new Discord.Client();
Client.on("ready", ()=>{
	console.log("ready!");
});

Client.on("message", (message)=> {
    if (message.content.startsWith("!list")) {
    message.channel.send("list working!");
  }
   if (message.content.startsWith("!search")) {
    message.channel.send("search working!");
  }
});
Client.login("Mzc4NTk1Njc5NzUwMDYyMDgx.DP-dsA.5palAk_mPGrV32Tru1rwAaP12gw");

