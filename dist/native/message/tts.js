"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$tts",
    version: "1.5.0",
    description: "Marks the response message as Text-To-Speech",
    unwrap: false,
    execute(ctx) {
        return this.success();
    },
});
//# sourceMappingURL=tts.js.map