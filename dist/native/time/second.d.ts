import { ArgType, NativeFunction } from "../../structures";
export declare enum SecondType {
    Numeric = "numeric",
    "2-Digit" = "2-digit"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof SecondType;
}], true>;
export default _default;
//# sourceMappingURL=second.d.ts.map