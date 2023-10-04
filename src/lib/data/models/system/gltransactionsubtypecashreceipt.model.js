const gltransactionsubtypecashreceipt = db.define(
    "gltransactionsubtypecashreceipt",
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
            unique: "gltransactionsubtypecashreceipt_unique_constraint",
        },
        crmcontactidenteredby: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        crmcontactidpaidfor: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        gldepositid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "gldeposit",
                key: "id",
            },
        },
        glpaymentmethodid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glpaymentmethod",
                key: "id",
            },
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        amount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        authorizationnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        careof: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        invoicenumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        isprintreceipt: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        orderid: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        referencenumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        transactiontag: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        writeoffamount: {
            type: Sequelize.DECIMAL(19, 4),
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "gltransactionsubtypecashreceipt",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "gltransactionsubtypecashreceipt_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "gltransactionsubtypecashreceipt_unique_constraint",
                unique: true,
                fields: [{ name: "gltransactionid" }],
            },
        ],
    },
);
