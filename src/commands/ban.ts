import * as discord from "discord.js";
import { IBotCommand } from "../api";

export default class ban implements IBotCommand {
    
    private readonly _command = "ban"
    
    help(): string {
       return "ban the member";
    }    
    
    isThiscommand(command: string): boolean {
       return command === this._command;
    }

    runCommand(args: string[], msgobject: discord.Message, client: discord.Client): void {
        
      let mentiondUser = msgobject.mentions.users.first();
      let suppliedReason =args.slice(1).join(" ") || "";
      let logchannel = client.channels.get("581929574863208450") as discord.TextChannel;
      if(!msgobject.member.hasPermission("MANAGE_ROLES"))
      { 
      msgobject.channel.send(`Nice try <@${msgobject.author.id}>, but you dont have perms to do this you black!`);
      return}
      
      else if(!mentiondUser)
      { 
      msgobject.channel.send(`sorry <@${msgobject.author.id}>, I can't find that user :frowning:`)
      return }
      let banLOg = `<@${mentiondUser.id}>**Has been Banned, The reason is:** ${suppliedReason}`;
      msgobject.delete(0);

      if(msgobject.member.hasPermission("MANAGE_ROLES")){
      msgobject.guild.member(mentiondUser).ban(banLOg)
      .then(console.log)
      .catch(console.error)
      msgobject.channel.send(` ${mentiondUser} **has been Banned.<a:ban:582540479267340300>**`)
      logchannel.send(banLOg)
      }
    }}