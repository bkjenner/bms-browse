const glbatch = db.define(
    "glbatch",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glaccountid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glbatchstatusid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: "glbatchstatus",
                key: "id",
            },
        },
        glbatchtypeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glbatchtype",
                key: "id",
            },
        },
        glexportbatchid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glexportbatch",
                key: "id",
            },
        },
        approvaldate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        createdate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn("now"),
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        fiscalyear: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        hasbatcherror: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "glbatch",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glbatch_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
