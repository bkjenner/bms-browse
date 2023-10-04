module.exports = {
    Query: {
        actactivities: (instance, args, context, info) => {
            let query = {};
            let priorityQuery = { required: false };
            let typeQuery = { required: false };
            let statusQuery = { required: false };
            let projectQuery = { required: false };

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
            }

            return context.models.actactivity.findAll({
                where: { ...query },
                limit: parseInt(args.limit) ? parseInt(args.limit) : 100,
                include: [
                    { model: context.models.actpriority, as: "actpriority", ...priorityQuery },
                    { model: context.models.actstatus, as: "actstatus", ...statusQuery },
                    { model: context.models.acttype, as: "acttype", ...typeQuery },
                    { model: context.models.actproject, as: "actproject", ...projectQuery },
                ],
            });
        },
    },
};
