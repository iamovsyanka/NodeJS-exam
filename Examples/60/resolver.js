const resolver = {
    setFaculty: async (args, context) => {
        let res = await context.updateFaculty(args, context);
        return (res == null) ? context.insertFaculty(args, context) : res;
    }
};

module.exports = resolver;
