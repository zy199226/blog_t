const mongodb = require('mongodb');
const util = require('util');

const MongoClient = mongodb.MongoClient();
const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const find = db => new Promise((resolve) => {
    db.collection('topics').find({}).toArray((err, result) => {
        if (err) throw err;
        resolve(result);
    });
});

const findData = async (db) => {
    const result = await find(db);
    return result;
};

const topicsFind = () => new Promise((resolve) => {
    MongoClient.connect(DB_CONN_STR, (err, db) => {
        if (err) throw err;
        findData(db).then((result) => {
            db.close();
            resolve(result);
        });
    });
});

exports.topicsFind = topicsFind;
