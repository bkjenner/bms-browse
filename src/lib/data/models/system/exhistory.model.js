const exhistory = db.define(
    "exhistory",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exhistorybatchid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exhistorybatch",
                key: "id",
            },
        },
        syschangehistoryrowidexported: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "syschangehistoryrow",
                key: "id",
            },
        },
        exsystemiddestination: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "exsystem",
                key: "id",
            },
        },
        source: {
            type: Sequelize.CHAR(1),
            allowNull: false,
        },
    },
    {
        db,
        tableName: "exhistory",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exhistory_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
