const glbatchtype = db.define(
    "glbatchtype",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: "glbatchtype_unique_constraint",
        },
        hasautomaticapproval: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        isautomated: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        shortcode: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        startdate: {
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
        tableName: "glbatchtype",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "glbatchtype_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "glbatchtype_unique_constraint",
                unique: true,
                fields: [{ name: "description" }],
            },
        ],
    },
);
