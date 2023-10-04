const hremploymentstatus = db.define(
    "hremploymentstatus",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "hremploymentstatus_unique_constraint",
        },
        displaysequence: {
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
        tableName: "hremploymentstatus",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "hremploymentstatus_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "hremploymentstatus_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
