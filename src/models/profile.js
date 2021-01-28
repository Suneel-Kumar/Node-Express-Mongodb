const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
    name : {
        type : String,
        required : true
    },
    email : {
        type : String, 
        required : true,
        // validate(value){
        //     if(value == ''){
        //         throw new Error("Email Field Cannot be Empty")
        //     }
        // }
    },
    Age : {
        type : Number,
        // required : true,
        // validate(value){
        //     if(value == '' || value == 0 || value<0){
        //         throw new Error("Age Cannot be Negative")
        //     }
        // }
    }
})

module.exports = Profile