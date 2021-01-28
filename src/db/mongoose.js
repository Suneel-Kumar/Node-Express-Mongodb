const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1:27017/MyMongoose'

mongoose.connect('mongodb://127.0.0.1:27017/MyMongoose', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
})