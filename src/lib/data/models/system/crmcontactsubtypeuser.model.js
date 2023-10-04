const crmcontactsubtypeuser = db.define(
    "crmcontactsubtypeuser",
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
            unique: "crmcontactsubtypeuser_unique_constraint",
        },
        login: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        password: {
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
        tableName: "crmcontactsubtypeuser",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "crmcontactsubtypeuser_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "crmcontactsubtypeuser_unique_constraint",
                unique: true,
                fields: [{ name: "crmcontactid" }],
            },
        ],
    },
);
