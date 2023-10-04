const glexportentry = db.define(
    "glexportentry",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glexporttransactionid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glexporttransaction",
                key: "id",
            },
        },
        accountnumber: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amount: {
            type: Sequelize.DECIMAL(19, 4),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        db,
        tableName: "glexportentry",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glexportentry_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
