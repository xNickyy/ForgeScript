import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    output: ArgType.Number,
    execute: async function(ctx) {
        return this.success(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone })).getMonth() + 1)
    }
})