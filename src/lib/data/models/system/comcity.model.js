const comcity = db.define(
    "comcity",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comcountryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "comcountry",
                key: "id",
            },
        },
        comprovincestateid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "comprovincestate",
                key: "id",
            },
        },
        name: {
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
        tableName: "comcity",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "comcity_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
