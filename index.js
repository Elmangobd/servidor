const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
//
require('./db');
require('./models/User');
//
const authRoutes = require('./routes/authRoutes');
const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get('/',requireToken,  (req, res) => {
    res.send("este es el inicio de mi api");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})