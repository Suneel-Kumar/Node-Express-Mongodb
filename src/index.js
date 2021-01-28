const express = require('express');
require('./db/mongoose');
const router = require('./routes/router')
const app = express();

const port = process.env.PORT || 3000

app.use(router);

// app.post('/Profile', (req, res) => {
//     const AddProfile = Profile(req.body);
//     console.log("Profiles", AddProfile)
//     AddProfile.save().then(() => {
//         res.send(AddProfile)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

// app.get('/getAllProfiles/:id', (req, res) => {
//     Profile.findById(req.params.id).then((Profiles) => {
//         if(!Profiles){return res.status(404).send("No Record Found ")}
//         res.send(Profiles)
//     }).catch((e) => {
//         res.status(500).send(e);
//     })
// })

// app.get('/getAllProfiles', (req, res) => {
//     Profile.find({}).then(user => {
//         res.send(user)
//     }).catch(e => {
//         res.status(404).send(e);
//     })
// })

// app.delete('/profiles/:id', async (req, res) => {
//     const Profiles = await Profile.findByIdAndDelete(req.params.id)
//     if(!Profile){
//         res.status(404).send()
//     }
//     res.send(Profile)
// } )

// const SaveRec = Profile({
//     name : "Santosh  Kumar",
//     email : "dileep@gmail.com",
//     Age : 20,
// })

// SaveRec.save().then((res) => {
//     console.log("Record Added Successfully ", res)
// }).catch((err) => {
//     console.log("Error in adding Record ", err);
// })

app.listen(port, (err) => {
    if (err) { return console.log("Error In Server Listening ") }
    console.log(`Server started at ${port} Successfully `);
}) 