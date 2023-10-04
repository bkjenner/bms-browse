const actproject = db.define(
    "actproject",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        actbillingmethodid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actbillingmethod",
                key: "id",
            },
        },
        actprojectidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actproject",
                key: "id",
            },
        },
        actsourceid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actsource",
                key: "id",
            },
        },
        actstatusid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actstatus",
                key: "id",
            },
        },
        crmcontactid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        glcostcentreid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glcostcentre",
                key: "id",
            },
        },
        baseamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        completiondate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        contact: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        expenseamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        referencenumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        shortcode: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        startdate: {
            type: Sequelize.DATEONLY,
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
        tableName: "actproject",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "actproject_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
