const crmcontact = db.define(
    "crmcontact",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmgenderid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmgender",
                key: "id",
            },
        },
        crmlanguageid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmlanguage",
                key: "id",
            },
        },
        crmsalutationid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmsalutation",
                key: "id",
            },
        },
        birthdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        contactnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        contactperson: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        middlename: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        picture: {
            type: Sequelize.BLOB,
            allowNull: true,
        },
        preferredfirstname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        previouslastname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        website: {
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
        tableName: "crmcontact",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmcontact_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
