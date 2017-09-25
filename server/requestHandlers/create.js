const querystring = require('querystring');
const createInsert = require('../dbHandlers/createInsert').createInsert;

const create = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        const data = querystring.parse(body);
        createInsert(data).then((dt) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(dt));
            res.end();
        });
    });
};

exports.create = create;
