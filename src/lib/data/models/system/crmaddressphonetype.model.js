const crmaddressphonetype = db.define(
    "crmaddressphonetype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "crmaddressphonetype_unique_constraint",
        },
        rowstatus: {
            type: Sequelize.CHAR(1),
            allowNull: false,
            defaultValue: "a",
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "crmaddressphonetype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmaddressphonetype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "crmaddressphonetype_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
