const syserror = db.define(
    "syserror",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        context: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        message: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        state: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        timestamp: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "syserror",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "syserror_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
