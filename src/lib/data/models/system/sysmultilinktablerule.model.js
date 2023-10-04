const sysmultilinktablerule = db.define(
    "sysmultilinktablerule",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        sysdictionarycolumnidsource: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "sysdictionarycolumn",
                key: "id",
            },
        },
        sysdictionarycolumniddest: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "sysdictionarycolumn",
                key: "id",
            },
        },
        sysdictionarytableid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        seqno: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        whereclause: {
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
        tableName: "sysmultilinktablerule",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysmultilinktablerule_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
