const mongodb = require('mongodb');
const util = require('util');

const MongoClient = mongodb.MongoClient();
const ObjectId = mongodb.ObjectID;
const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const find = (db, id) => new Promise((resolve) => {
    const data = { success: false, error_msg: '不是有效的话题ID' };
    if (id.length === 24 && !/[^0-9A-Fa-f]/g.test(id)) {
        db.collection('topics').find(
            { _id: ObjectId(id) }
        ).toArray((err, result) => {
            if (err) throw err;
            if (result[0]) {
                resolve({
                    success: true,
                    data: result[0]
                });
            } else {
                resolve(data);
            }
        });
    } else {
        resolve(data);
    }
});

const findData = async (db, id) => {
    const result = await find(db, id);
    return result;
};

const topicFind = id => new Promise((resolve) => {
    MongoClient.connect(DB_CONN_STR, (err, db) => {
        if (err) throw err;
        findData(db, id).then((result) => {
            db.close();
            resolve(result);
        });
    });
});

exports.topicFind = topicFind;
