const actactivitysubtypebilling = db.define(
    "actactivitysubtypebilling",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        actactivityid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "actactivity",
                key: "id",
            },
            unique: "actactivitysubtypebilling_unique_constraint",
        },
        crmcontactidinvoicethrough: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        gltransactionid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "gltransaction",
                key: "id",
            },
        },
        actbillingstatusid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actbillingstatus",
                key: "id",
            },
        },
        billedamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        overridebilledamount: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        overridehours: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        revenueamount: {
            type: Sequelize.DECIMAL,
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
        tableName: "actactivitysubtypebilling",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "actactivitysubtypebilling_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "actactivitysubtypebilling_unique_constraint",
                unique: true,
                fields: [{ name: "actactivityid" }],
            },
        ],
    },
);
