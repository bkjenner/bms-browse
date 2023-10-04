const exrecordgroup = db.define(
    "exrecordgroup",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        exrecordgroupidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "exrecordgroup",
                key: "id",
            },
            unique: "exrecordgroup_unique_constraint",
        },
        sysdictionarytableid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "sysdictionarytable",
                key: "id",
            },
            unique: "exrecordgroup_unique_constraint",
        },
        sysdictionarycolumnid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "sysdictionarycolumn",
                key: "id",
            },
            unique: "exrecordgroup_unique_constraint",
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: "exrecordgroup_unique_constraint",
        },
        whereclause: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: "exrecordgroup_unique_constraint",
        },
        drilldowncolumn: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: "exrecordgroup_unique_constraint",
        },
        displaysequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        topdownlevel: {
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
        tableName: "exrecordgroup",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "exrecordgroup_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "exrecordgroup_unique_constraint",
                unique: true,
                fields: [
                    { name: "exrecordgroupidparent" },
                    { name: "sysdictionarytableid" },
                    { name: "sysdictionarycolumnid" },
                    { name: "name" },
                    { name: "whereclause" },
                    { name: "drilldowncolumn" },
                ],
            },
        ],
    },
);
