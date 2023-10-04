const sysdictionarycolumn = db.define(
    "sysdictionarycolumn",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        sysdictionarytableid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
        },
        sysdictionarytableidforeign: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
        },
        columnsequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        datalength: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        datatype: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        decimals: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        defaultvalue: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ischangehistoryused: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isheadercolumn: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isencrypted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isnullable: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isincludedinuniqueconstraint: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        label: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        longname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        purpose: {
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
            allowNull: true,
        },
    },
    {
        db,
        tableName: "sysdictionarycolumn",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysdictionarycolumn_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
