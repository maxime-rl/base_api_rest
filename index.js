const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // permet publique API

mongoose.set('useFindAndModify', false);


app.use(bodyParser.json());
app.use(cors()); // placer avant postsRoutes
// app.use(cors(origin: 'https://exemple-autorisation')); permet de restreindre l'ouverture
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Serveur started: 5500'));