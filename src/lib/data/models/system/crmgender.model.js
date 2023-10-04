const crmgender = db.define(
    "crmgender",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "crmgender_unique_constraint",
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
        tableName: "crmgender",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmgender_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "crmgender_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
