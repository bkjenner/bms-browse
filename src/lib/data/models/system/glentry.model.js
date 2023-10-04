const glentry = db.define(
    "glentry",
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
        glcostcentreid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glcostcentre",
                key: "id",
            },
        },
        glentrytypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glentrytype",
                key: "id",
            },
        },
        gltransactionid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "gltransaction",
                key: "id",
            },
        },
        sysdictionarytableidchargedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowidchargedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        amount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        bankreconciliationdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        reconciliationbalance: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        referencenumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        reportingperioddate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        rollupamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "glentry",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glentry_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "ix_glentry_glaccountid",
                fields: [{ name: "glaccountid" }, { name: "glcostcentreid" }],
            },
            {
                name: "ix_glentry_glcostcentreid",
                fields: [{ name: "glcostcentreid" }, { name: "glaccountid" }],
            },
            {
                name: "ix_glentry_gltransactionid",
                fields: [{ name: "gltransactionid" }, { name: "id" }],
            },
            {
                name: "ix_glentry_rollupamount",
                fields: [{ name: "rollupamount" }],
            },
        ],
    },
);
