"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelMembers",
    version: "1.5.0",
    description: "Returns the members of a channel",
    unwrap: true,
    output: (0, array_1.default)(),
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its members",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel;
        return this.successJSON("members" in chan ? chan.members : null);
    },
});
//# sourceMappingURL=channelMembers.js.map