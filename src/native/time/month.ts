import { ArgType, NativeFunction, Return } from "../../structures"

export enum MonthType {
    numeric = "numeric",
    "2-digit" = "2-digit",
    long = "long",
    short = "short",
    narrow = "narrow"
}

export default new NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the month",
            rest: false,
            type: ArgType.Enum,
            enum: MonthType
        }
    ],
    output: ArgType.Unknown,
    execute: async function(ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone }))
    }
})