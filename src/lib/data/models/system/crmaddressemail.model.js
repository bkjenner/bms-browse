const crmaddressemail = db.define(
    "crmaddressemail",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmaddresstypeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmaddresstype",
                key: "id",
            },
        },
        crmcontactid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        isprimary: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
        tableName: "crmaddressemail",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmaddressemail_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
