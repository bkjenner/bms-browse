const glbudget = db.define(
    "glbudget",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glaccountid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glcostcentreid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glcostcentre",
                key: "id",
            },
        },
        amount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        budgetdate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        rollupamount: {
            type: Sequelize.DECIMAL,
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
        tableName: "glbudget",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glbudget_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
