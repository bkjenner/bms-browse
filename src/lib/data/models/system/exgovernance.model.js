const exgovernance = db.define(
    "exgovernance",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exsystemid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsystem",
                key: "id",
            },
            unique: "exgovernance_unique_constraint",
        },
        exrecordgroupid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exrecordgroup",
                key: "id",
            },
            unique: "exgovernance_unique_constraint",
        },
        rowidsubscribedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
            unique: "exgovernance_unique_constraint",
        },
        transferdate: {
            type: Sequelize.DATE,
            allowNull: true,
            unique: "exgovernance_unique_constraint",
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "exgovernance",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exgovernance_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exgovernance_unique_constraint",
                unique: true,
                fields: [{ name: "exsystemid" }, { name: "exrecordgroupid" }, { name: "rowidsubscribedto" }, { name: "transferdate" }],
            },
        ],
    },
);
