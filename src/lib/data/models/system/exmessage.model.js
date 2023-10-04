const exmessage = db.define(
    "exmessage",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exhistorybatchid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exhistorybatch",
                key: "id",
            },
        },
        exhistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "exhistory",
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
        sysmessageid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysmessage",
                key: "id",
            },
        },
        messageseverity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        isoverridden: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
        tableName: "exmessage",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "exmessage_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
