const MongoClient = require('mongodb').MongoClient();
const util = require('util');

const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const insertData = (db, data, callback) => {
    const collection = db.collection('author');
    let dt = {};

    collection.find({ username: data.username }).toArray((err, result) => {
        if (err) throw err;
        if (result[0]) {
            dt = { success: false, err: '用户名已被注册，请重新输入！' };
            callback(dt);
        } else {
            collection.insert(data, (err, result) => {
                if (err) throw err;
                dt = { uid: result.ops[0]._id, username: result.ops[0].username, success: true };
                callback(dt);
            });
        }
    });
};

const registerInsert = data => new Promise((resolve) => {
    MongoClient.connect(DB_CONN_STR, (err, db) => {
        if (err) throw err;
        console.log('数据库已连接！');
        insertData(db, data, (dt) => {
            db.close();
            resolve(dt);
            console.log('数据库已关闭！');
        });
    });
});

exports.regIn = registerInsert;
