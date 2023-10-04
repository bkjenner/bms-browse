const crmaddressphone = db.define(
    "crmaddressphone",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmaddressphonetypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmaddressphonetype",
                key: "id",
            },
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
        isprimary: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        phone: {
            type: Sequelize.STRING,
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
        tableName: "crmaddressphone",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmaddressphone_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
