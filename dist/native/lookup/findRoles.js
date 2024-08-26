"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMentionCharRegex = void 0;
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const role_1 = require("../../properties/role");
exports.RoleMentionCharRegex = /[@<>&]/g;
exports.default = new structures_1.NativeFunction({
    name: "$findRoles",
    version: "1.5.0",
    description: "Finds roles of a guild using a query",
    brackets: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild to find the role on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or role name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "limit",
            description: "The limit of results",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: role_1.RoleProperty
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, query, limit, prop, sep]) {
        query = query.replace(exports.RoleMentionCharRegex, "");
        limit ??= 10;
        prop ??= role_1.RoleProperty.id;
        const search = guild.roles.cache.filter(role => (role.id.includes(query) || role.name.includes(query))).toJSON().slice(0, limit);
        return this.success(search?.map((x) => role_1.RoleProperties[prop](x)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=findRoles.js.map