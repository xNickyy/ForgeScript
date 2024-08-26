import { ArgType, NativeFunction } from "../../structures";
export declare enum YearType {
    Numeric = "numeric",
    TwoDigit = "2-digit"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof YearType;
}], true>;
export default _default;
//# sourceMappingURL=year.d.ts.map