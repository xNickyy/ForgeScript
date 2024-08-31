import { ArgType, NativeFunction, Return } from "../../structures"

export enum SecondFormatType {
    Numeric = "numeric",
    TwoDigit = "2-digit"
}

export default new NativeFunction({
    name: "$second",
    version: "1.2.0",
    description: "Returns current second",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the second",
            rest: false,
            type: ArgType.Enum,
            enum: SecondFormatType
        }
    ],
    output: ArgType.Number,
    execute: async function(ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { second: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }))
    }
})