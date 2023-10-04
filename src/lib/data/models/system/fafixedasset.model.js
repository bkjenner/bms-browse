const fafixedasset = db.define(
    "fafixedasset",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        fastatusid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "fastatus",
                key: "id",
            },
        },
        fatypeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "fatype",
                key: "id",
            },
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        purchasedate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        fixedassetnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        serialnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        make: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        modelnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        modelyear: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        depreciationlife: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        depreciationsalvagevalue: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        warrantyexpirydate: {
            type: Sequelize.DATEONLY,
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
        tableName: "fafixedasset",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "fafixedasset_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
