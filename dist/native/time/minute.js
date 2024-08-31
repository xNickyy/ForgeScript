"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinuteFormatType = void 0;
const structures_1 = require("../../structures");
var MinuteFormatType;
(function (MinuteFormatType) {
    MinuteFormatType["Numeric"] = "numeric";
    MinuteFormatType["TwoDigit"] = "2-digit";
})(MinuteFormatType || (exports.MinuteFormatType = MinuteFormatType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$minute",
    version: "1.2.0",
    description: "Returns current minute",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the minute",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: MinuteFormatType
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { minute: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=minute.js.map