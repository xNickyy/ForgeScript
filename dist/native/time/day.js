"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: async function (ctx) {
        return this.success(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone })).getDay());
    }
});
//# sourceMappingURL=day.js.map