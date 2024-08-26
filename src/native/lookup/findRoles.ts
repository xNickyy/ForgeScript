import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { RoleProperties, RoleProperty } from "../../properties/role"

export const RoleMentionCharRegex = /[@<>&]/g

export default new NativeFunction({
    name: "$findRoles",
    version: "1.5.0",
    description: "Finds roles of a guild using a query",
    brackets: true,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to find the role on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or role name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "limit",
            description: "The limit of results",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: RoleProperty
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [ guild, query, limit, prop, sep ]) {
        query = query.replace(RoleMentionCharRegex, "")
        limit ??= 10
        prop ??= RoleProperty.id

        const search = guild.roles.cache.filter(role => (role.id.includes(query) || role.name.includes(query))).toJSON().slice(0, limit)

        return this.success(search?.map((x) => RoleProperties[prop!](x)).join(sep ?? ", "))
    },
})
