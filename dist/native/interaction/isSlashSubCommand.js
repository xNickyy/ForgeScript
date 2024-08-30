"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isSlashSubCommand",
    version: "1.5.0",
    description: "Whether the interaction is a slash sub command",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isChatInputCommand() && (ctx.interaction.commandType < 3)));
    },
});
//# sourceMappingURL=isSlashSubCommand.js.map