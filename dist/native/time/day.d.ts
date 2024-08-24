import { ArgType, NativeFunction } from "../../structures";
export declare enum DayType {
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
    enum: typeof DayType;
}], true>;
export default _default;
//# sourceMappingURL=day.d.ts.map