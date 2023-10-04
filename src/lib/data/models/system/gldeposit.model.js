const gldeposit = db.define(
    "gldeposit",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmcontactid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        gldepositstatusid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "gldepositstatus",
                key: "id",
            },
        },
        comments: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        depositdate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        rowstatus: {
            type: Sequelize.CHAR(1),
            allowNull: false,
            defaultValue: "a",
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
    },
    {
        db,
        tableName: "gldeposit",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "gldeposit_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
