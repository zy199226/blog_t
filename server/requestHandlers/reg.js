const querystring = require('querystring');
const regIn = require('../dbHandlers/registerInsert').regIn;

const reg = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const data = querystring.parse(body);
        data.create_at = new Date();
        regIn(data).then((dt) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(dt));
            res.end();
        });
    });
};

exports.reg = reg;
