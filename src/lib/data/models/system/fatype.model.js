const fatype = db.define(
    "fatype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        fatypeidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "fatype",
                key: "id",
            },
            unique: "fatype_unique_constraint",
        },
        glaccountidaccummulateddepreciation: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountidasset: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccountiddepreciationexpense: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        depreciationlife: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        depreciationpercent: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "fatype_unique_constraint",
        },
        isfixedassetnumberused: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        isusedtoclassifyrecords: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        replacementamount: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        displaysequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        topdownlevel: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        bottomuplevel: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        template: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        rowstatus: {
            type: Sequelize.CHAR(1),
            allowNull: false,
            defaultValue: "a",
            unique: "fatype_unique_constraint",
        },
        syschangehistoryid: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
    },
    {
        db,
        tableName: "fatype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "fatype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "fatype_unique_constraint",
                unique: true,
                fields: [{ name: "fatypeidparent" }, { name: "description" }, { name: "rowstatus" }],
            },
        ],
    },
);
