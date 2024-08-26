"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinuteType = void 0;
const structures_1 = require("../../structures");
var MinuteType;
(function (MinuteType) {
    MinuteType["Numeric"] = "numeric";
    MinuteType["TwoDigit"] = "2-digit";
})(MinuteType || (exports.MinuteType = MinuteType = {}));
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
            enum: MinuteType
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { minute: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=minute.js.map