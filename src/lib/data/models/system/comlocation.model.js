const comlocation = db.define(
    "comlocation",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comlocationidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "comlocation",
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
            unique: "comlocation_unique_constraint",
        },
        latitude: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        longitude: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        isusedtoclassifyrecords: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
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
        shortcode: {
            type: Sequelize.STRING,
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
        tableName: "comlocation",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "comlocation_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "comlocation_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
