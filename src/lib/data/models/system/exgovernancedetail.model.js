const exgovernancedetail = db.define(
    "exgovernancedetail",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exgovernanceid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exgovernance",
                key: "id",
            },
        },
        exsystemid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsystem",
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
        rowidmaster: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rowidsubscribedto: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "exgovernancedetail",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "exgovernancedetail_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
