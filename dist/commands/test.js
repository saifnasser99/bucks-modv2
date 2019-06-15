"use strict";
exports.__esModule = true;
var kick = (function () {
    function kick() {
        this._command = "test";
    }
    kick.prototype.help = function () {
        return "kick the member";
    };
    kick.prototype.isThiscommand = function (command) {
        return command === this._command;
    };
    kick.prototype.runCommand = function (args, msgobject, client) {
        var mentiondUser = msgobject.mentions.users.first();
        var suppliedReason = args.slice(1).join(" ") || "";
        var kickLOg = "<@" + mentiondUser.id + ">Has been kicked cuz (" + suppliedReason + ")";
        if (!msgobject.member.hasPermission("MANAGE_ROLES")) {
            msgobject.channel.send("Nice try <@" + msgobject.author.id + ">, but you dont have perms to do this you black!");
        }
        else if (!mentiondUser) {
            msgobject.channel.send("sorry <@" + msgobject.author.id + ">, I can't find that user :frowning:");
        }
        msgobject["delete"](0);
        if (msgobject.member.hasPermission("MANAGE_ROLES")) {
            msgobject.guild.member(mentiondUser).kick(kickLOg)
                .then(console.log)["catch"](console.error);
            msgobject.channel.send(" " + mentiondUser + " **has been Kicked.**");
        }
    };
    return kick;
}());
exports["default"] = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBcUNqQyxDQUFDO0lBbkNGLG1CQUFJLEdBQUo7UUFDRyxPQUFPLGlCQUFpQixDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBYSxHQUFiLFVBQWMsT0FBZTtRQUMxQixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCx5QkFBVSxHQUFWLFVBQVcsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFM0UsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSSxjQUFjLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFHLE9BQUssWUFBWSxDQUFDLEVBQUUsOEJBQXlCLGNBQWMsTUFBRyxDQUFDO1FBSTdFLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFDbEQ7WUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUscURBQWtELENBQUMsQ0FBQztTQUMzRzthQUNJLElBQUcsQ0FBQyxZQUFZLEVBQ3JCO1lBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBVyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUseUNBQXNDLENBQUMsQ0FBQTtTQUMvRjtRQUVELFNBQVMsQ0FBQyxRQUFNLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixJQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFDO1lBQ2xELFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQ2pCLE9BQUssQ0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNyQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFJLFlBQVksMEJBQXVCLENBQUMsQ0FBQTtTQUc5RDtJQUNILENBQUM7SUFBQSxXQUFDO0FBQUQsQ0FBQyxBQXZDTixJQXVDTSJ9