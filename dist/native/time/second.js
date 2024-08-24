"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondType = void 0;
const structures_1 = require("../../structures");
var SecondType;
(function (SecondType) {
    SecondType["Numeric"] = "numeric";
    SecondType["2-Digit"] = "2-digit";
})(SecondType || (exports.SecondType = SecondType = {}));
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: SecondType
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { second: format || "numeric", timeZone: ctx.timezone }));
    }
});
//# sourceMappingURL=second.js.map