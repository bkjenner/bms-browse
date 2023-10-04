const exhistorybatch = db.define(
    "exhistorybatch",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        createdate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn("now"),
        },
        distributiondate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        applieddate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "exhistorybatch",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "exhistorybatch_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
