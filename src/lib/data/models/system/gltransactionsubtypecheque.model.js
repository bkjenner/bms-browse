const gltransactionsubtypecheque = db.define(
    "gltransactionsubtypecheque",
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
            unique: "gltransactionsubtypecheque_unique_constraint",
        },
        glbillingaccountid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glbillingaccount",
                key: "id",
            },
        },
        address1: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address2: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        citytext: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ismanual: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        postalzip: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        printcnt: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        province: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "gltransactionsubtypecheque",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "gltransactionsubtypecheque_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "gltransactionsubtypecheque_unique_constraint",
                unique: true,
                fields: [{ name: "gltransactionid" }],
            },
        ],
    },
);
