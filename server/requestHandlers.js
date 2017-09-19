const start = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('哈哈');
    res.end();
};

exports.start = start;
