const crmrelationshiptype = db.define(
    "crmrelationshiptype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        primaryname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        secondaryname: {
            type: Sequelize.STRING,
            allowNull: false,
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
        tableName: "crmrelationshiptype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmrelationshiptype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
