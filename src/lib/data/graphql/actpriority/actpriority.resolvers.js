module.exports = {
    ActPriority: {
        view: (instance, args, context, info) => {
            return `${instance.description} (0-${instance.id})`;
        },
    },
};
