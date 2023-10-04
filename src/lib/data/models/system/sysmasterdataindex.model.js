const sysmasterdataindex = db.define(
    "sysmasterdataindex",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        sysdictionarytableidmaster: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        rowidmaster: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        sysdictionarycolumnidforeign: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarycolumn",
                key: "id",
            },
        },
        sysdictionarytableidforeign: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowidforeign: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        foreignkeytranslation: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "sysmasterdataindex",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysmasterdataindex_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
