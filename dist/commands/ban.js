"use strict";
exports.__esModule = true;
var ban = (function () {
    function ban() {
        this._command = "ban";
    }
    ban.prototype.help = function () {
        return "ban the member";
    };
    ban.prototype.isThiscommand = function (command) {
        return command === this._command;
    };
    ban.prototype.runCommand = function (args, msgobject, client) {
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
        var banLOg = "<@" + mentiondUser.id + ">**Has been Banned, The reason is:** " + suppliedReason;
        msgobject["delete"](0);
        if (msgobject.member.hasPermission("MANAGE_ROLES")) {
            msgobject.guild.member(mentiondUser).ban(banLOg)
                .then(console.log)["catch"](console.error);
            msgobject.channel.send(" " + mentiondUser + " **has been Banned.<a:ban:582540479267340300>**");
            logchannel.send(banLOg);
        }
    };
    return ban;
}());
exports["default"] = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQUE7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQWtDaEMsQ0FBQztJQWhDRixrQkFBSSxHQUFKO1FBQ0csT0FBTyxnQkFBZ0IsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkJBQWEsR0FBYixVQUFjLE9BQWU7UUFDMUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0JBQVUsR0FBVixVQUFXLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRTNFLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BELElBQUksY0FBYyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBd0IsQ0FBQztRQUNsRixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQ2xEO1lBQ0EsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHFEQUFrRCxDQUFDLENBQUM7WUFDNUcsT0FBTTtTQUFDO2FBRUYsSUFBRyxDQUFDLFlBQVksRUFDckI7WUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFXLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSx5Q0FBc0MsQ0FBQyxDQUFBO1lBQzVGLE9BQU07U0FBRTtRQUNSLElBQUksTUFBTSxHQUFHLE9BQUssWUFBWSxDQUFDLEVBQUUsNkNBQXdDLGNBQWdCLENBQUM7UUFDMUYsU0FBUyxDQUFDLFFBQU0sQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBCLElBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUM7WUFDbEQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztpQkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDakIsT0FBSyxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQUksWUFBWSxvREFBaUQsQ0FBQyxDQUFBO1lBQ3pGLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDdEI7SUFDSCxDQUFDO0lBQUEsVUFBQztBQUFELENBQUMsQUFwQ04sSUFvQ00ifQ==