let redis = require('redis');

let client = redis.createClient(6379, '127.0.0.1', {
    password: "123456"
});

client.on('error', err => {
    console.log(err);
})


client.set('name', "tf", redis.print);
client.get('name', (err, value) => {
    if(err) throw err;

    console.log("name: " + value);
})
client.del('name');

client.hmset('person', {
    'name': "tf",
    "age": "23"
}, redis.print);
client.hget('person', "name", (err, value) => {
    if(err) throw err;

    console.log("person.name: " + value);
})
client.hkeys('person', (err, keys) => {
    if(err) throw err;

    keys.forEach(key => console.log(key));
})
client.del("person");

client.exists("person", redis.print);