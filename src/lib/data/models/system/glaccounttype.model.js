const glaccounttype = db.define(
    "glaccounttype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "glaccounttype_unique_constraint",
        },
        isbalancesheettype: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        normalizationfactor: {
            type: Sequelize.SMALLINT,
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
        tableName: "glaccounttype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glaccounttype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glaccounttype_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
