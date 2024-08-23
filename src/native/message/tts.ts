import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$tts",
    version: "1.5.0",
    description: "Marks the response message as Text-To-Speech",
    unwrap: false,
    execute(ctx) {
        return this.success()
    },
})
