const hrposition = db.define(
    "hrposition",
    {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,

            primaryKey: true,
        },
        comlocationid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "comlocation",
                key: "id",
            },
        },
        crmcontactidemployee: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "crmcontact",
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
        hrgradeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "hrgrade",
                key: "id",
            },
        },
        hrpositionclassificationid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "hrpositionclassification",
                key: "id",
            },
        },
        hrpositionidparent: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        hrpositiontypeid: {
            type: Sequelize.BIGINT,
            allowNull: true,
            references: {
                model: "hrpositiontype",
                key: "id",
            },
        },
        commencementdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        positionnumber: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        salary: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        displaysequence: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        terminationdate: {
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        workingtitle: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        temporalstartdate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: "1000-01-01",
        },
        temporalenddate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: "9999-12-31",
            primaryKey: true,
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
        tableName: "hrposition",
        schema: "s0001v0000",
        hasTrigger: true,
        timestamps: false,
        indexes: [
            {
                name: "hrposition_pkey",
                unique: true,
                fields: [{ name: "id" }, { name: "temporalenddate" }],
            },
        ],
    },
);
