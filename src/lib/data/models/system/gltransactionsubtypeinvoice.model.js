const gltransactionsubtypeinvoice = db.define(
    "gltransactionsubtypeinvoice",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        gltransactionid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "gltransaction",
                key: "id",
            },
            unique: "gltransactionsubtypeinvoice_unique_constraint",
        },
        actprojectid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actproject",
                key: "id",
            },
        },
        glbillingaccountid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glbillingaccount",
                key: "id",
            },
        },
        gstover: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ismanual: {
            type: Sequelize.BOOLEAN,
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
        tableName: "gltransactionsubtypeinvoice",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "gltransactionsubtypeinvoice_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "gltransactionsubtypeinvoice_unique_constraint",
                unique: true,
                fields: [{ name: "gltransactionid" }],
            },
        ],
    },
);
