const expackage = db.define(
    "expackage",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsubnetserverid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsubnetserver",
                key: "id",
            },
        },
        package: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        createdate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn("now"),
        },
        readdate: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "expackage",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "expackage_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
