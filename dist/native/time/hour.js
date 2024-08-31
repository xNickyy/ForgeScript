"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourFormatType = void 0;
const structures_1 = require("../../structures");
var HourFormatType;
(function (HourFormatType) {
    HourFormatType["Numeric"] = "numeric";
    HourFormatType["TwoDigit"] = "2-digit";
})(HourFormatType || (exports.HourFormatType = HourFormatType = {}));
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: HourFormatType
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        const hour = new Date().toLocaleString("en-US", { hour: format || "numeric", hour12: false, timeZone: ctx.timezone, calendar: ctx.calendar });
        return this.success(format === HourFormatType.Numeric ? parseInt(hour, 10).toString() : hour);
    }
});
//# sourceMappingURL=hour.js.map