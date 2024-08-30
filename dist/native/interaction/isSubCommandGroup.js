"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isSubCommandGroup",
    version: "1.5.0",
    description: "Whether the interaction is a slash sub command group",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(ctx.interaction?.isChatInputCommand() ? !!ctx.interaction.options.getSubcommandGroup(false) : false);
    },
});
//# sourceMappingURL=isSubCommandGroup.js.map