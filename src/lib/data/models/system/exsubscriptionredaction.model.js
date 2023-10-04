const exsubscriptionredaction = db.define(
    "exsubscriptionredaction",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsubscriptionid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsubscription",
                key: "id",
            },
            unique: "exsubscriptionredaction_unique_constraint",
        },
        sysdictionarycolumnidredacted: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "sysdictionarycolumn",
                key: "id",
            },
            unique: "exsubscriptionredaction_unique_constraint",
        },
        redactedsql: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        redactedvalue: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        redactedtranslation: {
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
        tableName: "exsubscriptionredaction",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exsubscriptionredaction_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exsubscriptionredaction_unique_constraint",
                unique: true,
                fields: [{ name: "exsubscriptionid" }, { name: "sysdictionarycolumnidredacted" }],
            },
        ],
    },
);
