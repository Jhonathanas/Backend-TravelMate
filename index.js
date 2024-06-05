const express = require('express');
const mongoose = require('mongoose');
const Place = require('./models/place.model');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello from node Api tessss')
})

app.get('/place',async (req, res)=>{
    try {
        const place = await Place.find({});
        res.status(200).json(place);
    } catch(error){
        res.status(500).json({message: error.message})
    }
    console.log(req.body);
    res.send(req.body);
})

app.get('/place/:id',async (req, res)=>{
    try {
        const { id } = req.params;
        const place = await Place.findById(id);
        res.status(200).json(place);
    } catch(error){
        res.status(500).json({message: error.message})
    }
    console.log(req.body);
    res.send(req.body);
})

app.post('/place', async (req, res)=>{
    try{
        const place = await Place.create(req.body);
        res.status(200).json(place);
    } catch(error){
        res.status(500).json({message: error.message})
    }
    console.log(req.body);
    res.send(req.body);
})

mongoose.connect('mongodb+srv://jonathanadisaputro99:cBBb2feD46DVlRJV@yourbaedev.54l9qpe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=YourbaeDev')
.then(() => {
    app.listen(3000, () => {
        console.log('Server is Running on 3000')
    })
    console.log('connect to DB')
}).catch(() => {
    console.log('connect DB fail')

})