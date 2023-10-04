const syscommand = db.define(
    "syscommand",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        caption: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        commandtype: {
            type: Sequelize.CHAR(4),
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        frenchcaption: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        helptext: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ischangehistoryused: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        logcondition: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        menumessage: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        procedurename: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        sourcecode: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        systemmodule: {
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
        tableName: "syscommand",
        schema: "s0001v0000",
        timestamps: false,
        indexes: [
            {
                name: "syscommand_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
        ],
    },
);
