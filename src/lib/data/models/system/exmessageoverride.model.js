const exmessageoverride = db.define(
    "exmessageoverride",
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
        sysmessageid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysmessage",
                key: "id",
            },
        },
        description: {
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
        tableName: "exmessageoverride",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exmessageoverride_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
