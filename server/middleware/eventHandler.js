const loggerEvent = require('./logEvent');

const errorEvent = async (err, req, res, next) => {
    loggerEvent(`${err.message}\t${err.stack}`, 'errorLog.txt');
    res.status(500).send(err.message);
}

module.exports = errorEvent;