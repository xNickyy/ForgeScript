import { ArgType, NativeFunction } from "../../structures";
export declare enum HourType {
    Numeric = "numeric",
    "2-Digit" = "2-digit"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof HourType;
}], true>;
export default _default;
//# sourceMappingURL=hour.d.ts.map