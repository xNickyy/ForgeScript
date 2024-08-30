import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isSubCommand",
    version: "1.5.0",
    description: "Whether the interaction is a slash sub command",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(ctx.interaction?.isChatInputCommand() ? !!ctx.interaction.options.getSubcommand(false) : false)
    },
})