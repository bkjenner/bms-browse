const glexporttransaction = db.define(
    "glexporttransaction",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glbatchid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glbatch",
                key: "id",
            },
        },
        glexportbatchid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glexportbatch",
                key: "id",
            },
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        transactiondate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    {
        db,
        tableName: "glexporttransaction",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glexporttransaction_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
