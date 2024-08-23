"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sendTTSMessage",
    aliases: [
        "$sendTTS"
    ],
    version: "1.5.0",
    description: "Sends a Text-To-Speech message to a channel",
    unwrap: true,
    output: structures_1.ArgType.Message,
    args: [
        {
            name: "channel ID",
            description: "The channel to send this message to",
            required: true,
            type: structures_1.ArgType.Channel,
            rest: false,
            check: (i) => i.isTextBased(),
        },
        {
            name: "content",
            description: "The content for the message",
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "return message ID",
            description: "Whether to return the message id of the newly sent message",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, content, returnMessageID]) {
        const msg = await channel.send({
            content: content || undefined,
            tts: true
        });
        return this.success(returnMessageID ? msg?.id : undefined);
    },
});
//# sourceMappingURL=sendTTSMessage.js.map