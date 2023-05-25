const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

exports.loggerEvent = async(message, logName) => {
    let dateNow = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    console.log(uuid);
    let logItem = `${dateNow}\t${uuid()}\t${message}\n`;
    try{
        if(!fs.existsSync(path.join(__dirname, "..", "logs"))){
            await fsPromises.mkdir(path.joins(__dirname, "..", "logs"));
        }
        await fsPromises.appendFile(path.join(__dirname, "..", 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
}

exports.logger = async(req, res, next) => {
    this.loggerEvent(`${req.method}\t${req.headers.origin}\t${req.url}`, 'requestLog.txt');
    next();
}