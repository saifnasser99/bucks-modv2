"use strict";
exports.__esModule = true;
var whomadeyou = (function () {
    function whomadeyou() {
        this._command = "whomadeyou?";
    }
    whomadeyou.prototype.help = function () {
        return "this command dose nothing";
    };
    whomadeyou.prototype.isThiscommand = function (command) {
        return command === this._command;
    };
    whomadeyou.prototype.runCommand = function (args, msgobject, client) {
        msgobject.channel.send("This Guy <@563083701571813404> Made me");
    };
    return whomadeyou;
}());
exports["default"] = whomadeyou;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hvbWFkZXlvdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93aG9tYWRleW91LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtRQUVxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyx5QkFBSSxHQUFKO1FBQ0csT0FBTywyQkFBMkIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQWEsR0FBYixVQUFjLE9BQWU7UUFDMUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQyJ9