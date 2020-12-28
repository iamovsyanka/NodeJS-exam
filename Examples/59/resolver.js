const resolver = {
    getFaculties: (args, context) => {
        return (args.faculty) ? context.getFaculty(args, context) : context.getFaculties(args, context);
    }
};

module.exports = resolver;
