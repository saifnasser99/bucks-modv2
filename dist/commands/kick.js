"use strict";
exports.__esModule = true;
var kick = (function () {
    function kick() {
        this._command = "kick";
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
        var logchannel = client.channels.get("581929574863208450");
        if (!msgobject.member.hasPermission("MANAGE_ROLES")) {
            msgobject.channel.send("Nice try <@" + msgobject.author.id + ">, but you dont have perms to do this you black!");
            return;
        }
        else if (!mentiondUser) {
            msgobject.channel.send("sorry <@" + msgobject.author.id + ">, I can't find that user :frowning:");
            return;
        }
        var kickLOg = "<@" + mentiondUser.id + ">**Has been kicked, The reason is:** " + suppliedReason;
        msgobject["delete"](0);
        if (msgobject.member.hasPermission("MANAGE_ROLES")) {
            msgobject.guild.member(mentiondUser).kick(kickLOg)
                .then(console.log)["catch"](console.error);
            msgobject.channel.send(" " + mentiondUser + " **has been Kicked.**");
            logchannel.send(kickLOg);
        }
    };
    return kick;
}());
exports["default"] = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBa0NqQyxDQUFDO0lBaENGLG1CQUFJLEdBQUo7UUFDRyxPQUFPLGlCQUFpQixDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBYSxHQUFiLFVBQWMsT0FBZTtRQUMxQixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCx5QkFBVSxHQUFWLFVBQVcsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFM0UsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSSxjQUFjLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUF3QixDQUFDO1FBQ2xGLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFDbEQ7WUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUscURBQWtELENBQUMsQ0FBQztZQUM1RyxPQUFNO1NBQUM7YUFFRixJQUFHLENBQUMsWUFBWSxFQUNyQjtZQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQVcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHlDQUFzQyxDQUFDLENBQUE7WUFDNUYsT0FBTTtTQUFFO1FBRVIsSUFBSSxPQUFPLEdBQUcsT0FBSyxZQUFZLENBQUMsRUFBRSw2Q0FBd0MsY0FBZ0IsQ0FBQztRQUMzRixTQUFTLENBQUMsUUFBTSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQztZQUNsRCxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUNqQixPQUFLLENBQUEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDckIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBSSxZQUFZLDBCQUF1QixDQUFDLENBQUE7WUFDL0QsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUFDO0lBQzNCLENBQUM7SUFBQSxXQUFDO0FBQUQsQ0FBQyxBQXBDTixJQW9DTSJ9