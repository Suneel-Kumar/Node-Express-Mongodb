const express = require('express');
const bodyParser = require('body-parser');
const Profile = require('../models/profile');
const router = express.router();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

router.post('/Profile', (req, res) => {
    const AddProfile = Profile(req.body);
    console.log("Profiles", AddProfile)
    AddProfile.save().then(() => {
        res.send(AddProfile)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

router.get('/getAllProfiles/:id', (req, res) => {
    Profile.findById(req.params.id).then((Profiles) => {
        if(!Profiles){return res.status(404).send("No Record Found ")}
        res.send(Profiles)
    }).catch((e) => {
        res.status(500).send(e);
    })
})

router.get('/getAllProfiles', (req, res) => {
    Profile.find({}).then(user => {
        res.send(user)
    }).catch(e => {
        res.status(404).send(e);
    })
})

router.delete('/profiles/:id', async (req, res) => {
    const Profiles = await Profile.findByIdAndDelete(req.params.id)
    if(!Profile){
        res.status(404).send()
    }
    res.send(Profile)
} )

module.exports = router