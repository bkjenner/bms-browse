const glaccount = db.define(
    "glaccount",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glaccountidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glaccounttypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccounttype",
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
        bankaccountnumber: {
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
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "glaccount_unique_constraint",
        },
        iscollapseonexportrequired: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isusedtoclassifyrecords: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        quickcode: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        referencenumber: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: "glaccount_unique_constraint",
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
        tableName: "glaccount",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glaccount_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glaccount_unique_constraint",
                unique: true,
                fields: [{ name: "description" }, { name: "referencenumber" }],
            },
        ],
    },
);
