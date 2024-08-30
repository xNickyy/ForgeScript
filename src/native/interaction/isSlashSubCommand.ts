import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isSlashSubCommand",
    version: "1.5.0",
    description: "Whether the interaction is a slash sub command",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isChatInputCommand() && (ctx.interaction.commandType < 3)))
    },
})