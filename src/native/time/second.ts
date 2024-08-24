import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$second",
    version: "1.2.0",
    description: "Returns current second",
    unwrap: true,
    output: ArgType.Number,
    execute: async function(ctx) {
        return this.success(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone })).getSeconds())
    }
})