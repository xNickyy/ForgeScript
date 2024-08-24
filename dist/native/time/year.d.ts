import { ArgType, NativeFunction } from "../../structures";
export declare enum YearType {
    numeric = "numeric",
    "2-digit" = "2-digit"
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