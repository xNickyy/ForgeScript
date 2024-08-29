import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botMutalGuilds",
    version: "1.5.0",
    aliases: ["$clientMutalGuilds"],
    description: "Returns the client's mutal guilds with a user",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get mutal guilds from",
            rest: false,
            required: true,
            type: ArgType.User,
        },
        {
            name: "separator",
            description: "The separator to use for every guild",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    output: ArgType.String,
    execute(ctx, [user, sep]) {
        user ??= ctx.user!
        return this.success(ctx.client.guilds.cache.filter(x => x.members.cache.has(user.id)).map(guild => guild.id).join(sep || ", "))
    },
})