const config=require('./config.json');

const { Client, GatewayIntentBits } = require("discord.js");

const prefix="!";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]});


    client.on('messageCreate',function(message){
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;

        const commandBody=message.content.slice(prefix.length);
        const args=commandBody.split(' ');
        const command=args.shift().toLowerCase();

        if(command==="ping"){
            const timeTaken=Date.now() - message.createdTimestamp;
            message.reply(`Pong! This message has a latency of ${timeTaken}ms.`)

        }
        else if(command==="sum"){
            const numArgs=args.map(x=>parseFloat(x));
            const sum=numArgs.reduce((counter,x)=>counter+=x);
            message.reply(`The sum of all arguments you provided is: ${sum}`);
        }

    });

    client.login(config.BOT_TOKEN);


