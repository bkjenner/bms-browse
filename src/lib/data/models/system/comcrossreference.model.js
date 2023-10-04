const comcrossreference = db.define(
    "comcrossreference",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comcrossreferencetypeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "comcrossreferencetype",
                key: "id",
            },
        },
        sysdictionarytableidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: false,
            defaultValue: 100,
        },
        rowidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        number: {
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
        tableName: "comcrossreference",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "comcrossreference_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
