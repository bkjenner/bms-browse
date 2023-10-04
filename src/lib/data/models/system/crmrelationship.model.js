const crmrelationship = db.define(
    "crmrelationship",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmcontactid1: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        crmcontactid2: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        crmrelationshiptypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmrelationshiptype",
                key: "id",
            },
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
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
        tableName: "crmrelationship",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmrelationship_pkey",
                unique: true,
                fields: [{ name: "id" }, { name: "temporalenddate" }],
            },
        ],
    },
);
