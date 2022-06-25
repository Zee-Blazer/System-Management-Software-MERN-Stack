const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// User Model
const { User } = require('./src/Models/user');

mongoose.connect("mongodb://localhost:27017/demo")

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    User.find( (err, doc) => {
        if(err) return err;
        res.status(200).send(doc);
    } )
})

app.get('/get-user', (req, res) => {
    const { id } = req.body;
    User.findById(id, (err, doc) => {
        if(err) return err;
        res.status(200).json(doc);
    })
})

app.post('/poster', (req, res) => {
    const user = new User(req.body);
    user.save()
    .then( (response) => res.status(200).send(response) )
})

app.put("/update-user", (req, res) => {
    const { id, email, mobile, address, name } = req.body;
    User.findOneAndUpdate({_id: id}, { name, mobile, address, email }, (err, doc) => {
        if(err) return console.log(err);
        res.status(200).send(doc);
    })
})

app.delete('/delete-user', (req, res) => {
    User.findOneAndDelete({ _id: req.body.id }, (err, doc) => {
        if(err) return console.log(err);
        res.status(200).send(doc);
    })
})

const port = process.env.port || 3004

app.listen(port, () => console.log(`Server is running on Port:${port}`))
