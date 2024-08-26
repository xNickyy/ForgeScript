import { ArgType, NativeFunction, Return } from "../../structures"

export enum HourType {
    Numeric = "numeric",
    "2-Digit" = "2-digit"
}

export default new NativeFunction({
    name: "$hour",
    version: "1.2.0",
    description: "Returns current hour",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the hour",
            rest: false,
            type: ArgType.Enum,
            enum: HourType
        }
    ],
    output: ArgType.Number,
    execute: async function(ctx, [format]) {
        const hour = new Date().toLocaleString("en-US", { hour: format || "numeric", hour12: false, timeZone: ctx.timezone, calendar: ctx.calendar })
        return this.success(format === HourType.Numeric ? parseInt(hour, 10) : hour)
    }
})