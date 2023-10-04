const acttype = db.define(
    "acttype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        actcostunitid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actcostunit",
                key: "id",
            },
        },
        acttypeidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "acttype",
                key: "id",
            },
            unique: "acttype_unique_constraint",
        },
        glaccountid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glaccount",
                key: "id",
            },
        },
        glcostcentreid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glcostcentre",
                key: "id",
            },
        },
        sysmultilinktableruleidperformedby: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysmultilinktablerule",
                key: "id",
            },
        },
        sysmultilinktableruleidperformedfor: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysmultilinktablerule",
                key: "id",
            },
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "acttype_unique_constraint",
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
        tableName: "acttype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "acttype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "acttype_unique_constraint",
                unique: true,
                fields: [{ name: "acttypeidparent" }, { name: "description" }],
            },
        ],
    },
);
