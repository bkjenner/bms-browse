const falocationhistory = db.define(
    "falocationhistory",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmcontactidassignedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        glcostcentreidownedby: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glcostcentre",
                key: "id",
            },
        },
        fafixedassetid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "fafixedasset",
                key: "id",
            },
        },
        sysdictionarytableidlocation: {
            type: Sequelize.BIGINT,
            allowNull: true,
            defaultValue: 503,
        },
        rowidlocation: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        details: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        isactive: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        isconfirmed: {
            type: Sequelize.BOOLEAN,
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
        tableName: "falocationhistory",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "falocationhistory_pkey",
                unique: true,
                fields: [{ name: "id" }, { name: "temporalenddate" }],
            },
        ],
    },
);
