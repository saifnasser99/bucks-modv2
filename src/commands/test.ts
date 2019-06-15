import * as discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {
    
    private readonly _command = "test"
    
    help(): string {
       return "kick the member";
    }    
    
    isThiscommand(command: string): boolean {
       return command === this._command;
    }

    runCommand(args: string[], msgobject: discord.Message, client: discord.Client): void {
        
      let mentiondUser = msgobject.mentions.users.first();
      let suppliedReason =args.slice(1).join(" ") || "";
      let kickLOg = `<@${mentiondUser.id}>Has been kicked cuz (${suppliedReason})`;
      
      

      if(!msgobject.member.hasPermission("MANAGE_ROLES"))
      {
      msgobject.channel.send(`Nice try <@${msgobject.author.id}>, but you dont have perms to do this you black!`);
      }
      else if(!mentiondUser)
      {
          msgobject.channel.send(`sorry <@${msgobject.author.id}>, I can't find that user :frowning:`)
      }

      msgobject.delete(0);

      if(msgobject.member.hasPermission("MANAGE_ROLES")){
      msgobject.guild.member(mentiondUser).kick(kickLOg)
      .then(console.log)
      .catch(console.error)
      msgobject.channel.send(` ${mentiondUser} **has been Kicked.**`)
     
      
      }
    }}