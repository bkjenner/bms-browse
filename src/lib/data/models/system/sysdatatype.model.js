const sysdatatype = db.define(
    "sysdatatype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rowstatus: {
            type: Sequelize.CHAR(1),
            allowNull: false,
            defaultValue: "a",
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
    },
    {
        db,
        tableName: "sysdatatype",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysdatatype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
