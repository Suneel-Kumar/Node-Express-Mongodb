const { MongoClient, ObjectId } = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const url = 'mongodb://127.0.0.1:27017';

const newId = ObjectId()
// console.log(newId)

MongoClient.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, (err, client) => {
    if(err){ return console.log("Error In Created Database")}
    console.log("DB Connected successfully");

    const db = client.db("MyFirstDB");

    db.collection('Profile').deleteOne({name : "Sanjay" }).then((res) => {
        console.log("Record Deleted ", res);
    }).catch((err) => {
        console.log("Error in updating Record .!")
    })

    // db.collection('Profile').updateOne({name : "Sanjay"}, {
    //     $set : {
    //         email : "sanjay@gmail.com"
    //     }
    // }).then((res) => {
    //     console.log("updated Successfully ", res.toString());
    // }).catch((err) => {
    //     console.log("Error in updating Record .!")
    // })
    // db.collection('Profile').find({}).count((err, countRecord) => {
    //     if(err){ return console.log("Error Found In Getting Record .!")}
    //     console.log(countRecord);
    // })
    // db.collection('Profile').find({}).toArray((err, arr) => {
    //     if(err){ return console.log("Error Found In Getting Record .!")}
    //     console.log(arr);
    // })
    // db.collection('Profile').findOne({
    //     _id: ObjectId("6011c69c63512f293c891f6c")
    //     // name : "Sanjay",
    //     // email : "sanjay@gmail.com"
    // }, (err, res) => {
    //     if(err){ return console.log("Cannot Find Record")}
    //     res == null ? console.log("No Record Exist") : console.log("Got a Response DB ", res)
    // })
    // db.collection('Profile').insertMany([
    //     {
    //         name : "Sunny Bhai",
    //         email : "sunny@gmail.com"
    //     },
    //     {
    //         name : 'Suneel Kumar',
    //         email : 'suneel@gmail.com'
    //     }
    // ], (err, res) => {
    //     if(err){ return console.log("Error in Adding Document") }
    //     console.log("Record Added Successfully ", res);
    // })
})