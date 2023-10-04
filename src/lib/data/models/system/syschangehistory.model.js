const syschangehistory = db.define(
    "syschangehistory",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmcontactiduser: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        syscommandid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "syscommand",
                key: "id",
            },
        },
        sysdictionarytableidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowtemporalenddate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        changedate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        isexported: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        ismaxrecordsignored: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        syschangehistoryidundo: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowstatus: {
            type: Sequelize.CHAR(1),
            allowNull: false,
            defaultValue: "a",
        },
    },
    {
        db,
        tableName: "syschangehistory",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "syschangehistory_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
