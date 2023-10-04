const exsystem = db.define(
    "exsystem",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsubnetserverid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        schemaname: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "exsystem_unique_constraint",
        },
        productionversion: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        testversion: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        subscriptionkey: {
            type: Sequelize.STRING,
            allowNull: true,
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
        tableName: "exsystem",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exsystem_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exsystem_unique_constraint",
                unique: true,
                fields: [{ name: "schemaname" }],
            },
        ],
    },
);
