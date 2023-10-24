const express = require('express')
const cors = require('cors')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(methodOverride('_method'))
app.use('/', require('./controllers/bookstore'))
app.use('/', require('./controllers/users'))

app.get('/', (req, res) => {
    res.render('home'); // Assuming you have an 'home.ejs' template
});

require('dotenv').config();
const PORT = process.env.PORT || 3000; // Corrected PORT default value

// Use process.env.MONGO_URI directly without quotes
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();

// app.use(cors());
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));

// // Routes
// app.use('/', require('./controllers/bookstore'));
// app.use('/', require('./controllers/users'));

// app.get('/', (req, res) => {
//     res.render('home')
// })

// require('dotenv').config()
// const PORT = process.env.PORT || 3000
// mongoose.connect("process.env.MONGO_URI", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true},
//     () => {
//         console.log('connected to MongoDB')
//     }   
// )

// app.listen(process.env.PORT, () => console.log('Server running!'))
