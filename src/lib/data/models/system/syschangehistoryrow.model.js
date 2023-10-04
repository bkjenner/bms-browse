const syschangehistoryrow = db.define(
    "syschangehistoryrow",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "syschangehistory",
                key: "id",
            },
        },
        sysdictionarytableidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        rowidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        rowtemporalenddate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        changedate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        actiontype: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        operationtype: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        olddata: {
            type: Sequelize.JSONB,
            allowNull: true,
        },
        newdata: {
            type: Sequelize.JSONB,
            allowNull: true,
        },
        isprocessed: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "syschangehistoryrow",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "syschangehistoryrow_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
