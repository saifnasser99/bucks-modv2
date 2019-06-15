import * as discord from "discord.js";
import { IBotCommand } from "../api";

export default class whomadeyou implements IBotCommand {
    
    private readonly _command = "whomadeyou?"
    
    help(): string {
       return "this command dose nothing";
    }    
    
    isThiscommand(command: string): boolean {
       return command === this._command;
    }

    runCommand(args: string[], msgobject: discord.Message, client: discord.Client): void {
        
        //lets us know it all went well!
        msgobject.channel.send("This Guy <@563083701571813404> Made me");
    }
}