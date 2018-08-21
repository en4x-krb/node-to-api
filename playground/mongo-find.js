const {MongoClient, ObjectID} = require('mongodb');

//If the ToDoApp does not exists then it is created dynamically
//But will not create unless a new doc is inserted
MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log(err);
    }

    console.log('Connected to mongoDb server');
    const db = client.db('ToDoApp');

    db.collection('ToDos').find({
        completed: true,
        _id: new ObjectID('5b7abd5d11f214200c9a1dfd')
    }).toArray().then( (docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
        client.close();
    }, (err) => {
        console.log('Unable to fetch docs', err);
        client.close();
    });

});
//mongod.exe --dbpath [path to mongo-data dir]