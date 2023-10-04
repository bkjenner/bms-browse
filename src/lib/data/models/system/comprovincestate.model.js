const comprovincestate = db.define(
    "comprovincestate",
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
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        shortcode: {
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
        tableName: "comprovincestate",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "comprovincestate_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
