const glentrytype = db.define(
    "glentrytype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "glentrytype_unique_constraint",
        },
        displaysequence: {
            type: Sequelize.INTEGER,
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
        tableName: "glentrytype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glentrytype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glentrytype_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
