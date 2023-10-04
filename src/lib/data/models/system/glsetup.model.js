const glsetup = db.define(
    "glsetup",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        accountlabel: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        costcentrelabel: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        crmcontactidcompany: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        fiscalenddate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        fiscalstartdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        fiscalyearincrement: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        glaccountidcash: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountiddisbursement: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidgst: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidhst: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidpayable: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidpst: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidreceivable: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidwriteoff: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glcostcentreidwriteoff: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glcostcentre",
                key: "id",
            },
        },
        writeoffamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        gstnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        gstrate: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        hoursperday: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        iscostcentreused: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        isforcebalanceused: {
            type: Sequelize.BOOLEAN,
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
        tableName: "glsetup",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "glsetup_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
