//code is super barebones atm. Just placeholders until DB is ready
//Try connection mongo to 35.24.106.170/DarkSoulsData. If we run this localhost just do localhost/DarkSoulsData.
const Discord = require('discord.js');
const Client = new Discord.Client();
const mongoClient = require("mongodb").MongoClient;
var express = require("express");
var io = require('socket.io')(socketaddr);
var socketaddr = "35.24.106.170:8080";
var socket = io();
io.on('connection',function(client){});

Client.on("ready", ()=>{
	console.log("ready!");
});
io.on("connection",function(socket){
	
	socket.on("searchReturn", function(data) {
		active_queries.push(JSON.parse(data));
		updateContent();
	});
	socket.on("listReturn", function(data) {
		active_queries.push(JSON.parse(data));
		updateContent();
	});
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