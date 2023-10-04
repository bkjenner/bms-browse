const actbillingmethod = db.define(
    "actbillingmethod",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "actbillingmethod_unique_constraint",
        },
        displaysequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
        tableName: "actbillingmethod",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "actbillingmethod_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "actbillingmethod_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
