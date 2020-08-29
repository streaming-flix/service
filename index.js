const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const { db } = require('./config');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('pages/home');
// });

app.use('/api/user', require('./routes/user'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/movie', require('./routes/movie'));
app.get('*', (req, res) => {
    res.send('404 Not Found');
});

if (db) {
    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
}
