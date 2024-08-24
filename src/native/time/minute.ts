import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$minute",
    version: "1.2.0",
    description: "Returns current UTC minute",
    unwrap: true,
    output: ArgType.Number,
    execute: async function (ctx) {
        return this.success(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone })).getMinutes())
    }
})