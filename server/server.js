// Dependencies
const express = require('express');
const cors = require('cors');

// Express instance
const app = express();

// Port Config
const expressPort = require('./config/config').EXPRESS_SERVER_PORT;
const PORT = process.env.PORT || expressPort;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/items', require('./routes/items'));
app.use('/api/categories', require('./routes/categories'));

// Serving static files in production
if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
    
} 

// Server listen
app.listen(PORT, err => {
    if (err) return console.log(`Server Error: ${err}`);
    console.log(`Server on port ${PORT}`);
});