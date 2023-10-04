const glexportbatch = db.define(
    "glexportbatch",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exportdate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "glexportbatch",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glexportbatch_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
