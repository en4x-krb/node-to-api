const MongoClient = require('mongodb').MongoClient;

//If the ToDoApp does not exists then it is created dynamically
//But will not create unless a new doc is inserted
MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log(err);
    }

    console.log('Connected to mongoDb server');
    const db = client.db('ToDoApp');

    // db.collection('ToDos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err)
    //         return console.log(err);

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Enax KRB',
        age: 69,
        location: 'Lel'
    }, (err, res) => {
        if (err)
            return console.log(err);

        console.log(JSON.stringify(res.ops, undefined, 2));
        console.log(res.ops[0]._id.getTimestamp());
    });

    client.close();
});
//mongod.exe --dbpath [path to mongo-data dir]