const http = require('http');
const url = require('url');

const start = (route, handle) => {
    const onRequest = (req, res) => {
        const pathname = url.parse(req.url).pathname;
        route(handle, pathname, req, res);
    };

    http.createServer(onRequest).listen(8000);
    console.log('Server has start!');
};

exports.start = start;
