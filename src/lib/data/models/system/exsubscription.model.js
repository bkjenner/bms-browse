const exsubscription = db.define(
    "exsubscription",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsubscriberid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsubscriber",
                key: "id",
            },
            unique: "exsubscription_unique_constraint",
        },
        exrecordgroupid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exrecordgroup",
                key: "id",
            },
            unique: "exsubscription_unique_constraint",
        },
        rowidsubscribedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
            unique: "exsubscription_unique_constraint",
        },
        effectivedate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
            unique: "exsubscription_unique_constraint",
        },
        expirydate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
            unique: "exsubscription_unique_constraint",
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "exsubscription",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exsubscription_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exsubscription_unique_constraint",
                unique: true,
                fields: [
                    { name: "exsubscriberid" },
                    { name: "exrecordgroupid" },
                    { name: "rowidsubscribedto" },
                    { name: "effectivedate" },
                    { name: "expirydate" },
                ],
            },
        ],
    },
);
