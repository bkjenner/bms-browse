const crmcontactsubtypeemployee = db.define(
    "crmcontactsubtypeemployee",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmcontactid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmcontact",
                key: "id",
            },
            unique: "crmcontactsubtypeemployee_unique_constraint",
        },
        hremploymentstatusid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "hremploymentstatus",
                key: "id",
            },
        },
        commencementdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        terminationdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        temporalstartdate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: "1000-01-01",
        },
        temporalenddate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: "9999-12-31",
            primaryKey: true,
            unique: "crmcontactsubtypeemployee_unique_constraint",
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
        tableName: "crmcontactsubtypeemployee",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmcontactsubtypeemployee_pkey",
                unique: true,
                fields: [{ name: "id" }, { name: "temporalenddate" }],
            },
            {
                name: "crmcontactsubtypeemployee_unique_constraint",
                unique: true,
                fields: [{ name: "crmcontactid" }, { name: "temporalenddate" }],
            },
        ],
    },
);
