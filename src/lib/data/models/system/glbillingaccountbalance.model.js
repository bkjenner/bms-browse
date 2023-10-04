const glbillingaccountbalance = db.define(
    "glbillingaccountbalance",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glaccountid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        sysdictionarytableidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: false,
            defaultValue: 321,
        },
        rowidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        balance: {
            type: Sequelize.DECIMAL,
            allowNull: false,
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
        tableName: "glbillingaccountbalance",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glbillingaccountbalance_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
