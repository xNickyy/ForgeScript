"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearFormatType = void 0;
const structures_1 = require("../../structures");
var YearFormatType;
(function (YearFormatType) {
    YearFormatType["Numeric"] = "numeric";
    YearFormatType["TwoDigit"] = "2-digit";
})(YearFormatType || (exports.YearFormatType = YearFormatType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$year",
    version: "1.2.0",
    description: "Returns current year",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the year",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: YearFormatType
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { year: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=year.js.map