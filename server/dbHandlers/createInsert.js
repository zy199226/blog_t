const mongodb = require('mongodb');
const util = require('util');

const MongoClient = mongodb.MongoClient();
const ObjectID = mongodb.ObjectID;
const DB_CONN_STR = util.format('mongodb://%s', 'localhost:27017/blog_t');

const verify = (db, data) => new Promise((resolve) => {
    db.collection('author').find(
        { _id: ObjectID(data.uid) },
        { username: 1 }
    ).toArray((err, result) => {
        if (err) throw err;
        if (result[0]) {
            resolve({
                title: data.title,
                content: data.content,
                username: result[0].username,
                create_at: new Date()
            });
        }
    });
});

const insertTopic = (db, data) => new Promise((resolve) => {
    db.collection('topics').insert(data, (err, result) => {
        if (err) throw err;
        resolve(result.ops[0]._id);
    });
});

const updateCreate = (db, data, id) => new Promise((resolve) => {
    db.collection('author').update(
        { _id: ObjectID(data.uid) },
        { $push: { create: id } },
        (err) => {
            if (err) throw err;
            resolve();
        }
    );
});

const insertData = async (db, data) => {
    const verifyAccount = await verify(db, data);
    const topicID = await insertTopic(db, verifyAccount);
    await updateCreate(db, data, topicID);
    return {
        success: true,
        topicID
    };
};

const createInsert = data => new Promise((resolve) => {
    MongoClient.connect(DB_CONN_STR, (err, db) => {
        if (err) throw err;
        console.log('数据库已连接！');
        insertData(db, data).then((topic) => {
            db.close();
            console.log('数据库已关闭！');
            resolve(topic);
        });
    });
});

exports.createInsert = createInsert;
