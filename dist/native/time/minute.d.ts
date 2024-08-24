import { ArgType, NativeFunction } from "../../structures";
export declare enum MinuteType {
    numeric = "numeric",
    "2-digit" = "2-digit"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof MinuteType;
}], true>;
export default _default;
//# sourceMappingURL=minute.d.ts.map