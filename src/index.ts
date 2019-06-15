import * as discord from "discord.js";
import * as configfile from "./config"
import { IBotCommand } from "./api";
import { arch } from "os";

const Client: discord.Client = new discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

Client.on("ready", () => {
    
    //let us know when the bot is online
    console.log("ready to go!");
})
Client.on("message", msg => {

    //ignore messages if it was sent by the bot
    if (msg.author.bot) { return; }

    //ignore messages that don't start with prefix
    if (!msg.content.startsWith(configfile.config.prefix)) {return; }
    //Handle the command 
    handleCommand(msg);

   

    
     
})


async function handleCommand(msg: discord.Message) {

    //split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(configfile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    //loop through all of our loaded commands
    for(const commandClass of commands){

        //attempt to execute code but ready in case of a possbile error
        try{

            //Check if our command class is the correct one
            if(!commandClass.isThiscommand(command)){

                //go to the next iteration of the loop if this isn't the correct command class
                continue;
            }

            await commandClass.runCommand(args, msg, Client);
        }      
        catch(exception){

            //if there is an error, then log the exception
            console.log(exception);
        }
    }
}
function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    
    if(!configfile.config || (configfile.config.commands as string[]).length ===0) { return;}
   
    //loop through all of the commands in our config file
    for(const commandName of configfile.config.commands as string[]) {

        const commandClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandClass() as IBotCommand;

        commands.push(command);
    }
}


Client.login(configfile.config.token);