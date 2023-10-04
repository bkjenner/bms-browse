const comattribute = db.define(
    "comattribute",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comattributeidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "comattribute",
                key: "id",
            },
        },
        sysmultilinktableruleid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysmultilinktablerule",
                key: "id",
            },
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        label: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        sysdatatypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdatatype",
                key: "id",
            },
        },
        ismandatory: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdatatype",
                key: "id",
            },
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
        tableName: "comattribute",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "comattribute_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
