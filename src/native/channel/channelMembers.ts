import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelMembers",
    version: "1.5.0",
    description: "Returns the members of a channel",
    unwrap: true,
    output: array<ArgType.String>(),
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its members",
            rest: false,
            required: true,
            type: ArgType.Channel,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.successJSON("members" in chan ? chan.members : null)
    },
})