let MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';


MongoClient.connect(url, (err, client) => {
    if(err) throw err;

    console.log("connected successfully to server");

    const db = client.db(dbName);
    let collection = db.collection('documents');

    collection.insertOne(
        {
            "title": "i like cake",
            "body": "it is quite good."
        },
        {
            safe: true
        },
        (err, result) => {
            if(err) throw err;
    
            let document = result.ops[0];

            console.log(document);
            console.log(document._id);
        }
    )

    // db.dropCollection(dbName, {}, (err, ...args) => {
    //     if(err) throw err;

    //     console.log(args);
    // })

    client.close();
})

