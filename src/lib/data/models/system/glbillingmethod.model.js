const glbillingmethod = db.define(
    "glbillingmethod",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "glbillingmethod_unique_constraint",
        },
        shortcode: {
            type: Sequelize.STRING,
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
        tableName: "glbillingmethod",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glbillingmethod_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glbillingmethod_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
