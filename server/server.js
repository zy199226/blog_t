const http = require('http');
const url = require('url');

const start = (route, handle) => {
    const onRequest = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
        res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        res.setHeader('X-Powered-By', ' 3.2.1');
        res.setHeader('Content-Type', 'application/json;charset=utf-8');

        const pathname = url.parse(req.url).pathname;
        route(handle, pathname, req, res);
    };

    http.createServer(onRequest).listen(8000);
    console.log(`Server ${process.pid} has start!`);
};

exports.start = start;
