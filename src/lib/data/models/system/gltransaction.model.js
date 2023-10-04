const gltransaction = db.define(
    "gltransaction",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glbatchid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glbatch",
                key: "id",
            },
        },
        glentryidmain: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glentry",
                key: "id",
            },
        },
        glpostingstatusid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glpostingstatus",
                key: "id",
            },
        },
        gltransactionidreversed: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "gltransaction",
                key: "id",
            },
        },
        gltransactiontypeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "gltransactiontype",
                key: "id",
            },
        },
        sysdictionarytableidsubtype: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
        },
        createdate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn("now"),
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        duedate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        referencenumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        transactiondate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "gltransaction",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "gltransaction_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "ix_gltransaction_glbatchid",
                fields: [{ name: "glbatchid" }],
            },
            {
                name: "ix_gltransaction_glpostingstatusid",
                fields: [{ name: "glpostingstatusid" }],
            },
            {
                name: "ix_gltransaction_gltransactionidreversedid",
                fields: [{ name: "gltransactionidreversed" }, { name: "id" }],
            },
            {
                name: "ix_gltransaction_transactiondate",
                fields: [{ name: "transactiondate" }],
            },
        ],
    },
);
