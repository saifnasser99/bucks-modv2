import * as discord from "discord.js";

export interface IBotCommand {
    help(): string;
    isThiscommand(command: string): boolean;
    runCommand(args: string[], msgobject: discord.Message, client: discord.Client): void;
}