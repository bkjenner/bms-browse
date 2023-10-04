const hrgrade = db.define(
    "hrgrade",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "hrgrade_unique_constraint",
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
        tableName: "hrgrade",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "hrgrade_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "hrgrade_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
