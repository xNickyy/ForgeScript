"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayType = void 0;
const structures_1 = require("../../structures");
var DayType;
(function (DayType) {
    DayType["numeric"] = "numeric";
    DayType["2-digit"] = "2-digit";
    DayType["long"] = "long";
    DayType["short"] = "short";
    DayType["narrow"] = "narrow";
})(DayType || (exports.DayType = DayType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the day",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: DayType
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        const options = { timeZone: ctx.timezone };
        if (format === "numeric" || format === "2-digit" || !format) {
            options.day = format || "numeric";
        }
        else {
            options.weekday = format;
        }
        return this.success(new Date().toLocaleString("en-US", options));
    }
});
//# sourceMappingURL=day.js.map