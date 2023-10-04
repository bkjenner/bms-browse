const exsubnetserver = db.define(
    "exsubnetserver",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "exsubnetserver_unique_constraint",
        },
        systemidsubnetserver: {
            type: Sequelize.INTEGER,
            allowNull: false,
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
        tableName: "exsubnetserver",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exsubnetserver_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exsubnetserver_unique_constraint",
                unique: true,
                fields: [{ name: "name" }],
            },
        ],
    },
);
