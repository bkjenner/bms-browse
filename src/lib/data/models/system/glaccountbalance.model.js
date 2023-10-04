const glaccountbalance = db.define(
    "glaccountbalance",
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
        glaccountamount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        glaccountamountytd: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        glbudgetamount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        glbudgetamountytd: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        glreportingperiodamount: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        glreportingperiodamountytd: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        isbalancesheettype: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        summarydate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "glaccountbalance",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glaccountbalance_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "ix_glaccountbalance",
                fields: [{ name: "glaccountid" }, { name: "glcostcentreid" }, { name: "summarydate" }, { name: "isbalancesheettype" }],
            },
        ],
    },
);
