import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$updateCustomFunctions",
    version: "1.5.0",
    aliases: ["$updateFunctions"],
    description: "Updates custom bot functions, also registers new ones",
    unwrap: false,
    execute(ctx) {
        ctx.client.functions.load
        return this.success()
    },
})