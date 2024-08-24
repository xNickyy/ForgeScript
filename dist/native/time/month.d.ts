import { ArgType, NativeFunction } from "../../structures";
export declare enum MonthType {
    numeric = "numeric",
    "2-digit" = "2-digit",
    long = "long",
    short = "short",
    narrow = "narrow"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof MonthType;
}], true>;
export default _default;
//# sourceMappingURL=month.d.ts.map