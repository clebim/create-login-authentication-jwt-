const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./routes');
const routesToken = require('./routesToken');

mongoose.connect('mongodb+srv://matheus:0000@cluster0-jont8.mongodb.net/Authentication?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);
app.use(routesToken);

app.listen(3000);