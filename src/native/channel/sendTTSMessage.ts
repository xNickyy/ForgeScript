import { BaseChannel, Message, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$sendTTSMessage",
    aliases: [
        "$sendTTS"
    ],
    version: "1.5.0",
    description: "Sends a Text-To-Speech message to a channel",
    unwrap: true,
    output: ArgType.Message,
    args: [
        {
            name: "channel ID",
            description: "The channel to send this message to",
            required: true,
            type: ArgType.Channel,
            rest: false,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "content",
            description: "The content for the message",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "return message ID",
            description: "Whether to return the message id of the newly sent message",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, content, returnMessageID]) {
        const msg = await (channel as TextChannel).send({
            content: content || undefined,
            tts: true
        })
        return this.success(returnMessageID ? msg?.id : undefined)
    },
})
