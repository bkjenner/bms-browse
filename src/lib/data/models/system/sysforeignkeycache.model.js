const sysforeignkeycache = db.define(
    "sysforeignkeycache",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        sysdictionarytableid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        rowid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        translation: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "sysforeignkeycache",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysforeignkeycache_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
