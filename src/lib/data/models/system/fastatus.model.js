const fastatus = db.define(
    "fastatus",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "fastatus_unique_constraint",
        },
        displaysequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
        tableName: "fastatus",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "fastatus_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "fastatus_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
