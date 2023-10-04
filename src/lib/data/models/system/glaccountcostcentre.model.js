const glaccountcostcentre = db.define(
    "glaccountcostcentre",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glaccountid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glcostcentreid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "glcostcentre",
                key: "id",
            },
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
        tableName: "glaccountcostcentre",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glaccountcostcentre_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
