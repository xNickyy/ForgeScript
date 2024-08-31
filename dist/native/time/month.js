"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthFormatType = void 0;
const structures_1 = require("../../structures");
var MonthFormatType;
(function (MonthFormatType) {
    MonthFormatType["Numeric"] = "numeric";
    MonthFormatType["TwoDigit"] = "2-digit";
    MonthFormatType["Long"] = "long";
    MonthFormatType["Short"] = "short";
    MonthFormatType["Narrow"] = "narrow";
})(MonthFormatType || (exports.MonthFormatType = MonthFormatType = {}));
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: MonthFormatType
        }
    ],
    output: structures_1.ArgType.Unknown,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=month.js.map