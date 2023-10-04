let Sequelize = require("sequelize");
let settings = require("../../framework/settings");
let Promise = require("bluebird");

if (settings.system().mainDatastore == "mssql") {
    Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
        return this._applyTimezone(date, options).format("YYYY-MM-DD HH:mm:ss.SSS");
    };
    Sequelize.DATE.prototype.toSql = function () {
        return "DATETIME";
    };
}

let db = new Sequelize("postgres://postgres:Method123@bmsdev.cbb4tdiqsigu.us-east-1.rds.amazonaws.com:5432/sn000001", {
    dialect: "postgres",
    schema: "s0001v0000, s0000v0000",
    dialectOptions: {
        prependSearchPath: true,
    },
});

module.exports = db;
