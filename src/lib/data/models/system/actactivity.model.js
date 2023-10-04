const actactivity = db.define(
    "actactivity",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        actpriorityid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actpriority",
                key: "id",
            },
        },
        actstatusid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actstatus",
                key: "id",
            },
        },
        acttypeid: {
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: "acttype",
                key: "id",
            },
        },
        actprojectid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "actproject",
                key: "id",
            },
        },
        sysdictionarytableidperformedby: {
            type: Sequelize.BIGINT,
            allowNull: true,
            defaultValue: 100,
        },
        rowidperformedby: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        sysdictionarytableidperformedfor: {
            type: Sequelize.BIGINT,
            allowNull: true,
            defaultValue: 100,
        },
        rowidperformedfor: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        completiondate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        startdate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        totalactual: {
            type: Sequelize.DECIMAL,
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
        tableName: "actactivity",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "actactivity_pkey",
                unique: true,
                fields: [{ name: "id" }],
            },
            {
                name: "idx_completiondate",
                fields: [{ name: "completiondate" }, { name: "id" }],
            },
        ],
    },
);

actactivity.associate = function (db) {
    db.models.actactivity.belongsTo(db.models.actpriority, { as: "actpriority", foreignKey: "actpriorityid" });
    db.models.actactivity.belongsTo(db.models.actproject, { as: "actproject", foreignKey: "actprojectid" });
    db.models.actactivity.belongsTo(db.models.actstatus, { as: "actstatus", foreignKey: "actstatusid" });
    db.models.actactivity.belongsTo(db.models.acttype, { as: "acttype", foreignKey: "acttypeid" });
    db.models.actactivity.hasOne(db.models.actactivitysubtypebilling, { as: "actactivitysubtypebilling", foreignKey: "actactivityid" });
};
