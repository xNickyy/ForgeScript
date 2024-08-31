import { ArgType, NativeFunction } from "../../structures";
export declare enum MinuteFormatType {
    Numeric = "numeric",
    TwoDigit = "2-digit"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof MinuteFormatType;
}], true>;
export default _default;
//# sourceMappingURL=minute.d.ts.map