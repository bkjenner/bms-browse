module.exports = {
    Query: {
        actactivities: (instance, args, context, info) => {
            let query = {};
            let priorityQuery = { required: false };
            let typeQuery = { required: false };
            let statusQuery = { required: false };
            let projectQuery = { required: false };
            let byQuery = { required: false };
            let forQuery = { required: false };

            if (args) {
                query = context.constructQuery(args.filter);

                if (args.actpriority) {
                    priorityQuery.where = context.constructQuery(args.actpriority);
                    priorityQuery.required = true;
                }

                if (args.acttype) {
                    typeQuery.where = context.constructQuery(args.acttype);
                    typeQuery.required = true;
                }

                if (args.actstatus) {
                    statusQuery.where = context.constructQuery(args.actstatus);
                    statusQuery.required = true;
                }

                if (args.actproject) {
                    projectQuery.where = context.constructQuery(args.actproject);
                    projectQuery.required = true;
                }

                if (args.performedby) {
                    byQuery.where = context.constructQuery(args.performedby);
                    byQuery.required = true;
                }

                if (args.performedfor) {
                    forQuery.where = context.constructQuery(args.performedfor);
                    forQuery.required = true;
                }
            }

            return context.models.actactivity.findAll({
                where: { ...query },
                limit: parseInt(args.limit) ? parseInt(args.limit) : 100,
                include: [
                    { model: context.models.actpriority, as: "actpriority", ...priorityQuery },
                    { model: context.models.actstatus, as: "actstatus", ...statusQuery },
                    { model: context.models.acttype, as: "acttype", ...typeQuery },
                    { model: context.models.actproject, as: "actproject", ...projectQuery },
                    { model: context.models.crmcontact, as: "performedby", ...byQuery },
                    { model: context.models.crmcontact, as: "performedfor", ...forQuery },
                ],
            });
        },
    },
};
