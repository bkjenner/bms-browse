/**
 * The framework module loader.
 *
 * @class Loader
 * @constructor
 */
function Loader() {}

module.exports = new Loader();

var Promise = require("bluebird");
var fs = require("fs-extra");
var path = require("path");
var Db = require("../data/models");
var settings = require("./settings");
var cache = require("./cache");
var os = require("os");
var _ = require("lodash");
var rulesEngine = require("./rulesengine");
var admin = require("./modules/admin");
var { logger, morganLogger } = require("./logger.js");

//----------Routes--------------//
Loader.prototype.initialize = function (app) {
    logger.system("Initializing framework modules..");
    rulesEngine.initialize(app);
    admin.initialize(app);
    logger.system("Finished initializing framework modules..");
    logger.system("Associating data models..");
    let models = Db.models;
    try {
        Object.keys(models).forEach((model) => {
            if (models[model].associate) {
                models[model].associate(Db);
            }
        });
    } catch (e) {
        logger.system("Error associating data models", e);
    }
    logger.system("Caching contacts..");
    Db.models.crmcontact
        .findAll({
            raw: true,
            attributes: ["id", "name"],
        })
        .then((contacts) => {
            if (contacts) {
                _.map(contacts, (v) => {
                    if (v.name) {
                        cache.setHashValue("contacts", v.id, v.name);
                    }
                });
            }
        });
    logger.system("Finished associating data models..");
};
