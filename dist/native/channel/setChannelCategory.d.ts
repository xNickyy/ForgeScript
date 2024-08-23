import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    check: (i: BaseChannel) => i is BaseChannel & Record<"setParent", unknown>;
    type: ArgType.Channel;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}], true>;
export default _default;
//# sourceMappingURL=setChannelCategory.d.ts.map