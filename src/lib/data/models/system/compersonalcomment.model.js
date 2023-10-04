const compersonalcomment = db.define(
    "compersonalcomment",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        crmcontactiduser: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        sysdictionarytableidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: false,
            defaultValue: 100,
        },
        rowidappliesto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: false,
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
        tableName: "compersonalcomment",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "compersonalcomment_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
