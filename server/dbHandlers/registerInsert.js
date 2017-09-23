const MongoClient = require('mongodb').MongoClient();
const util = require('util');

const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const insertData = (db, data, callback) => {
    const collection = db.collection('author');
    let dt = {};

    collection.find({ username: data.username }).toArray((err, result) => {
        if (err) throw err;
        if (result[0]) {
            dt = { success: false, err: '账号已注册' };
            callback(dt);
        } else {
            collection.insert(data, (err, result) => {
                if (err) throw err;
                dt = { uid: result.ops[0]._id, success: true };
                callback(dt);
            });
        }
    });
};

const registerInsert = data => new Promise((resolve, reject) => {
    MongoClient.connect(DB_CONN_STR, (err, db) => {
        if (err) throw err;
        console.log('数据库已连接！');
        insertData(db, data, (dt) => {
            db.close();
            console.log('数据库已关闭！');
            resolve(dt);
        });
    });
});

exports.regIn = registerInsert;
