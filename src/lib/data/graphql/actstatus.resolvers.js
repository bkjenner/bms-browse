module.exports = {
    ActStatus: {
        view: (instance, args, context, info) => {
            return `{instance.description} (0-${instance.id})`;
        },
    },
};
