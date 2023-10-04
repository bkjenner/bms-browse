const actrateexpense = db.define(
    "actrateexpense",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        actprojectid: {
            type: Sequelize.BIGINT,
            allowNull: true,
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
        sysdictionarytableidchargedby: {
            type: Sequelize.BIGINT,
            allowNull: false,
            defaultValue: 100,
        },
        rowidchargedby: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        rate: {
            type: Sequelize.DECIMAL,
            allowNull: false,
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
        tableName: "actrateexpense",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "actrateexpense_pkey",
                unique: true,
                fields: [{ name: "id" }, { name: "temporalenddate" }],
            },
        ],
    },
);
