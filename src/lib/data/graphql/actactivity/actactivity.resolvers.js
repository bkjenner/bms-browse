module.exports = {
    Query: {
        actactivities: (instance, args, context, info) => {
            console.log(instance);
            let query = {};
            let includes = [];

            if (args) {
                query = context.constructQuery(args.filter);
            }

            return context.models.actactivity
                .findAll({
                    logging: console.log,
                    where: { ...query, actpriorityid: { [context.Op.not]: null } },
                    limit: parseInt(args.limit) ? parseInt(args.limit) : 100,
                    include: [
                        { model: context.models.actpriority, as: "actpriority" },
                        { model: context.models.actstatus, as: "actstatus" },
                        { model: context.models.acttype, as: "acttype" },
                        { model: context.models.actproject, as: "actproject" },
                    ],
                })
                .then((data) => {
                    return data;
                });
        },
    },
};
