import { ArgType, NativeFunction } from "../../structures";
export declare enum HourType {
    numeric = "numeric",
    "2-digit" = "2-digit"
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