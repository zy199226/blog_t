const topicsFind = require('../dbHandlers/topicsFind').topicsFind;

const topics = (req, res) => {
    topicsFind().then((result) => {
        res.writeHead(200, { 'Content-Type': 'application/x-www-form-urlencoded' });
        res.write(JSON.stringify(result));
        res.end();
    });
};

exports.topics = topics;
