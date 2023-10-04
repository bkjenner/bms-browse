const syschangehistorycolumn = db.define(
    "syschangehistorycolumn",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        syschangehistoryrowid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "syschangehistoryrow",
                key: "id",
            },
        },
        sysdictionarycolumnid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "sysdictionarycolumn",
                key: "id",
            },
        },
        sysdictionarytableidbefore: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
        },
        sysdictionarytableidafter: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
        },
        rawdatabefore: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        rawdataafter: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        translateddatabefore: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        translateddataafter: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "syschangehistorycolumn",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "syschangehistorycolumn_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
