const url = require('url');
const querystring = require('querystring');
const topicFind = require('../dbHandlers/topicFind').topicFind;

const topic = (req, res) => {
    const id = querystring.parse(url.parse(req.url).query).id;
    topicFind(id).then((result) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result));
        res.end();
    });
};

exports.topic = topic;
