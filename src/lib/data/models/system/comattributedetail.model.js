const comattributedetail = db.define(
    "comattributedetail",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comattributeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "comattribute",
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
        attributevalue: {
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
        tableName: "comattributedetail",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "comattributedetail_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
