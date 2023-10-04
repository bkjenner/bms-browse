const glcostcentre = db.define(
    "glcostcentre",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        glcostcentreidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "glcostcentre",
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
            unique: "glcostcentre_unique_constraint",
        },
        topdownlevel: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        bottomuplevel: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        isusedtoclassifyrecords: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        referencenumber: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: "glcostcentre_unique_constraint",
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
        tableName: "glcostcentre",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glcostcentre_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glcostcentre_unique_constraint",
                unique: true,
                fields: [{ name: "description" }, { name: "referencenumber" }],
            },
        ],
    },
);
