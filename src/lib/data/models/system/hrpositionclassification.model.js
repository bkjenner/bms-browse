const hrpositionclassification = db.define(
    "hrpositionclassification",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "hrpositionclassification_unique_constraint",
        },
        displaysequence: {
            type: Sequelize.INTEGER,
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
        tableName: "hrpositionclassification",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "hrpositionclassification_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "hrpositionclassification_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
