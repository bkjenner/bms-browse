const glpaymentmethod = db.define(
    "glpaymentmethod",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "glpaymentmethod_unique_constraint",
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
        tableName: "glpaymentmethod",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glpaymentmethod_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glpaymentmethod_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
