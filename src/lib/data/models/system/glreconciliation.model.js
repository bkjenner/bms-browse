const glreconciliation = db.define(
    "glreconciliation",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glentryidfrom: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glentry",
                key: "id",
            },
        },
        glentryidto: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glentry",
                key: "id",
            },
        },
        amount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "glreconciliation",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glreconciliation_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "ix_glreconciliation_glentryidfrom",
                fields: [{ name: "glentryidfrom" }, { name: "id" }],
            },
        ],
    },
);
