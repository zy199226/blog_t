const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient();
const ObjectID = mongodb.ObjectID;
const util = require('util');

const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const findData = (db, data, callback) => {
    const collection = db.collection('author');
    let dt = {};
    let target = {};

    if (data.uid) {
        target = { _id: ObjectID(data.uid) };
    } else {
        target.username = data.username;
    }

    collection.find(
        target,
        { _id: 1, username: 1, password: 1 }
    ).toArray((err, result) => {
        if (err) throw err;
        if (result[0] &&
            result[0].username === data.username &&
            result[0].password === data.password) {
            dt = { uid: result[0]._id, username: result[0].username, success: true };
        } else if (result[0] && result[0]._id == data.uid) {
            dt = { uid: result[0]._id, username: result[0].username, success: true };
        } else {
            dt = { success: false, err: '用户名或密码错误，请重试！' };
        }
        callback(dt);
    });
};

const loginFind = data => new Promise((resolve, reject) => {
    MongoClient.connect(DB_CONN_STR, (err, db) => {
        if (err) throw err;
        console.log('数据库已连接！');
        findData(db, data, (dt) => {
            db.close();
            resolve(dt);
            console.log('数据库已关闭！');
        });
    });
});

exports.logFind = loginFind;
