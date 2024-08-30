import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isSubCommandGroup",
    version: "1.5.0",
    description: "Whether the interaction is a slash sub command group",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(ctx.interaction?.isChatInputCommand() ? ctx.interaction.options.getSubcommandGroup() : false)
    },
})