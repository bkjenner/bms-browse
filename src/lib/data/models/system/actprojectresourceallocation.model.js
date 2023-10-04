const actprojectresourceallocation = db.define(
    "actprojectresourceallocation",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        actprojectid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "actproject",
                key: "id",
            },
        },
        acttypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "acttype",
                key: "id",
            },
        },
        crmcontactid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "crmcontact",
                key: "id",
            },
        },
        dollars: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        hours: {
            type: Sequelize.DECIMAL,
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
        tableName: "actprojectresourceallocation",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "actprojectresourceallocation_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
