"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$updateCustomFunctions",
    version: "1.5.0",
    aliases: ["$updateFunctions"],
    description: "Updates custom bot functions, also registers new ones",
    unwrap: false,
    execute(ctx) {
        ctx.client.functions.load;
        return this.success();
    },
});
//# sourceMappingURL=updateCustomFunctions.js.map