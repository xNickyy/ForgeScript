import { ArgType, NativeFunction } from "../../structures";
import { RoleProperty } from "../../properties/role";
export declare const RoleMentionCharRegex: RegExp;
export declare enum SearchMethodType {
    StartsWith = 0,
    EndsWith = 1,
    Includes = 2
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Guild;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof RoleProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof SearchMethodType;
}], true>;
export default _default;
//# sourceMappingURL=findRoles.d.ts.map