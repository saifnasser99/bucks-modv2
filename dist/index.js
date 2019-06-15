"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var discord = require("discord.js");
var configfile = require("./config");
var Client = new discord.Client();
var commands = [];
loadCommands(__dirname + "/commands");
Client.on("ready", function () {
    console.log("ready to go!");
});
Client.on("message", function (msg) {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(configfile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function () {
        var command, args, _i, commands_1, commandClass, exception_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    command = msg.content.split(" ")[0].replace(configfile.config.prefix, "");
                    args = msg.content.split(" ").slice(1);
                    _i = 0, commands_1 = commands;
                    _a.label = 1;
                case 1:
                    if (!(_i < commands_1.length)) return [3, 6];
                    commandClass = commands_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    if (!commandClass.isThiscommand(command)) {
                        return [3, 5];
                    }
                    return [4, commandClass.runCommand(args, msg, Client)];
                case 3:
                    _a.sent();
                    return [3, 5];
                case 4:
                    exception_1 = _a.sent();
                    console.log(exception_1);
                    return [3, 5];
                case 5:
                    _i++;
                    return [3, 1];
                case 6: return [2];
            }
        });
    });
}
function loadCommands(commandsPath) {
    if (!configfile.config || configfile.config.commands.length === 0) {
        return;
    }
    for (var _i = 0, _a = configfile.config.commands; _i < _a.length; _i++) {
        var commandName = _a[_i];
        var commandClass = require(commandsPath + "/" + commandName)["default"];
        var command = new commandClass();
        commands.push(command);
    }
}
Client.login(configfile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFzQztBQUN0QyxxQ0FBc0M7QUFJdEMsSUFBTSxNQUFNLEdBQW1CLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXBELElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7QUFFakMsWUFBWSxDQUFJLFNBQVMsY0FBVyxDQUFDLENBQUE7QUFFckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFHZixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFBO0FBQ0YsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQSxHQUFHO0lBR3BCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPO0tBQUU7SUFHL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBQyxPQUFPO0tBQUU7SUFFakUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBTXZCLENBQUMsQ0FBQyxDQUFBO0FBR0YsU0FBZSxhQUFhLENBQUMsR0FBb0I7Ozs7OztvQkFHekMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzswQkFHVCxFQUFSLHFCQUFROzs7eUJBQVIsQ0FBQSxzQkFBUSxDQUFBO29CQUF4QixZQUFZOzs7O29CQU1kLElBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFDO3dCQUdwQyxjQUFTO3FCQUNaO29CQUVELFdBQU0sWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFBOztvQkFBaEQsU0FBZ0QsQ0FBQzs7OztvQkFLakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLENBQUMsQ0FBQzs7O29CQWpCTCxJQUFRLENBQUE7Ozs7OztDQW9CckM7QUFDRCxTQUFTLFlBQVksQ0FBQyxZQUFvQjtJQUl0QyxJQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQXFCLENBQUMsTUFBTSxLQUFJLENBQUMsRUFBRTtRQUFFLE9BQU87S0FBQztJQUd6RixLQUF5QixVQUFzQyxFQUF0QyxLQUFBLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBb0IsRUFBdEMsY0FBc0MsRUFBdEMsSUFBc0MsRUFBRTtRQUE3RCxJQUFNLFdBQVcsU0FBQTtRQUVqQixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUksWUFBWSxTQUFJLFdBQWEsQ0FBQyxDQUFDLFNBQU8sQ0FBQSxDQUFDO1FBRXZFLElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRWxELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDO0FBR0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=