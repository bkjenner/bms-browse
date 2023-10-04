const exsubscriptiondetail = db.define(
    "exsubscriptiondetail",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsubscriptionid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsubscription",
                key: "id",
            },
        },
        exsubscriberid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsubscriber",
                key: "id",
            },
        },
        exrecordgroupid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exrecordgroup",
                key: "id",
            },
        },
        sysdictionarytableidsubscribedto: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        rowidsubscribedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowidmaster: {
            type: Sequelize.BIGINT,
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
        tableName: "exsubscriptiondetail",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "exsubscriptiondetail_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
