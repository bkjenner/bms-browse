const crmaddress = db.define(
    "crmaddress",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comcityid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "comcity",
                key: "id",
            },
        },
        crmaddressidinheritedfrom: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmaddress",
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
        addresstext: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        additionalinformation: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address1: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address2: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address3: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address4: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        effectivedate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        isprimaryaddress: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        postalzip: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        latitude: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        longitude: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        provincestate: {
            type: Sequelize.STRING,
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
        tableName: "crmaddress",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmaddress_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
