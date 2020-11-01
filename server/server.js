const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/items', require('./routes/items'));

app.listen(PORT, err => {
    if (err) return console.log(`Server Error: ${err}`);
    console.log(`Server on port ${PORT}`);
});