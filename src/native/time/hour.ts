import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hour",
    version: "1.2.0",
    description: "Returns current hour",
    unwrap: true,
    output: ArgType.Number,
    execute: async function(ctx) {
        return this.success(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone })).getHours())
    }
})