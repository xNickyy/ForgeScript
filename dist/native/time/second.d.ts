import { ArgType, NativeFunction } from "../../structures";
export declare enum SecondFormatType {
    Numeric = "numeric",
    TwoDigit = "2-digit"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof SecondFormatType;
}], true>;
export default _default;
//# sourceMappingURL=second.d.ts.map