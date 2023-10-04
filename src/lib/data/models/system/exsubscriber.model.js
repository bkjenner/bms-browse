const exsubscriber = db.define(
    "exsubscriber",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsubscriberidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "exsubscriber",
                key: "id",
            },
            unique: "exsubscriber_unique_constraint",
        },
        exsystemid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "exsystem",
                key: "id",
            },
            unique: "exsubscriber_unique_constraint",
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "exsubscriber_unique_constraint",
        },
        displaysequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        topdownlevel: {
            type: Sequelize.INTEGER,
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
        tableName: "exsubscriber",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exsubscriber_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exsubscriber_unique_constraint",
                unique: true,
                fields: [{ name: "exsubscriberidparent" }, { name: "exsystemid" }, { name: "name" }],
            },
        ],
    },
);
