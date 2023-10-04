const glbillingaccount = db.define(
    "glbillingaccount",
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
        },
        glaccountid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glbillingaccountstatusid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glbillingaccountstatus",
                key: "id",
            },
        },
        glbillingmethodid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glbillingmethod",
                key: "id",
            },
        },
        glefttypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glefttype",
                key: "id",
            },
        },
        accountnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        currentbalance: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        duedate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        hoursperday: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        isgstexempt: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        ishstexempt: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        ispremiumtaxexempt: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        ispstexempt: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        manualamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        paymentterms: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        transitnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        typeid: {
            type: Sequelize.INTEGER,
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
        tableName: "glbillingaccount",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glbillingaccount_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
