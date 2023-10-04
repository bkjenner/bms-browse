const sysdictionarytable = db.define(
    "sysdictionarytable",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        syscommandid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "syscommand",
                key: "id",
            },
        },
        changehistorylevel: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        changehistoryscope: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ischangehistoryused: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        istabletemporal: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        normalizedname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        objectid: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        pluralname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        singularname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        systemmodule: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tabletype: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        translation: {
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
        tableName: "sysdictionarytable",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "sysdictionarytable_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
