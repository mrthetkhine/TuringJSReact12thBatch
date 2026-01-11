function customLogger(req, res, next) {
    req.time = new Date();
    console.log(new Date(),req.method,req.url);
    next();
}
exports.logger = customLogger;