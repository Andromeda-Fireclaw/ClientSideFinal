//code is super barebones atm. Just placeholders until DB is ready
//Try connection mongo to 35.24.106.170/DarkSoulsData. If we run this localhost just do localhost/DarkSoulsData.
const Discord = require('discord.js');
const Client = new Discord.Client();
var io = require("socket.io");
var socket = io();

Client.on("ready", ()=>{
	console.log("ready!");
});

Client.on("message", (message)=> {
    if (message.content.startsWith("!list")) {
		var query = message.content.replace("!list ","");
		var result = socket.emit("list", "Axes");
		console.log(query);
		message.channel.send();
  }
   if (message.content.startsWith("!search")) {
		var query = message.replace("!search","");
		message.channel.send(socket.emit("list","dagger"));
  }
});
Client.login("Mzc4NTk1Njc5NzUwMDYyMDgx.DP-dsA.5palAk_mPGrV32Tru1rwAaP12gw");