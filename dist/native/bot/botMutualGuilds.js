"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botMutualGuilds",
    version: "1.5.0",
    aliases: ["$clientMutualGuilds"],
    description: "Returns the client's mutual guilds with a user",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get mutual guilds from",
            rest: false,
            required: true,
            type: structures_1.ArgType.User,
        },
        {
            name: "separator",
            description: "The separator to use for every guild",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: false,
    output: structures_1.ArgType.String,
    execute(ctx, [user, sep]) {
        user ??= ctx.user;
        return this.success(ctx.client.guilds.cache.filter(x => x.members.cache.has(user.id)).map(guild => guild.id).join(sep || ", "));
    },
});
//# sourceMappingURL=botMutualGuilds.js.map