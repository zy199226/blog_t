const querystring = require('querystring');
const MongoClient = require('mongodb').MongoClient();
const util = require('util');

const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const insertData = (db, data, callback) => {
    const collection = db.collection('author');

    collection.insert(data, (err, result) => {
        if (err) console.log(err);
        callback(result);
    });
};

const reg = (req, res) => {
    let body = '';
    let id = {};
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const data = querystring.parse(body);

        MongoClient.connect(DB_CONN_STR, (err, db) => {
            if (err) console.log(err);
            console.log('数据库已连接！');
            insertData(db, data, (result) => {
                id = { id: result.ops[0]._id, success: true };

                db.close();
                console.log('数据库已关闭！');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify(id));
                res.end();
            });
        });
    });
};

exports.reg = reg;
