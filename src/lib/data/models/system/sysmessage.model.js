const sysmessage = db.define(
    "sysmessage",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        detail: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        hint: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ismessagelogged: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isexceptionraised: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        routinename: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
    },
    {
        db,
        tableName: "sysmessage",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysmessage_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
