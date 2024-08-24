"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthType = void 0;
const structures_1 = require("../../structures");
var MonthType;
(function (MonthType) {
    MonthType["Numeric"] = "numeric";
    MonthType["2-Digit"] = "2-digit";
    MonthType["Long"] = "long";
    MonthType["Short"] = "short";
    MonthType["Narrow"] = "narrow";
})(MonthType || (exports.MonthType = MonthType = {}));
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
            enum: MonthType
        }
    ],
    output: structures_1.ArgType.Unknown,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone }));
    }
});
//# sourceMappingURL=month.js.map