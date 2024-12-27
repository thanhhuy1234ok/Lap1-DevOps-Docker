// const express = require('express')
// const mongoose = - require('mongoose');
// const cors = require('cors');
// const app = express()

// app.use(express.json())
// app.use(cors())

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number

// })

// const ProductModel = mongoose.model('Product', productSchema)
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => console.log('Connected!'));

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.post('/', (req, res) => {
//     const product = new ProductModel(req.body)
//     product.save()
// })

// app.get("/api/v1/products", (req, res) => {
//     ProductModel.find().then((products) => {
//         res.json(products)
//     })
// })

// app.get('/detail/:id', (req, res) => {
//     ProductModel.findById(req.params.id).then((product) => {
//         res.json(product)
//     })
// })
// app.listen(
//     process.env.PORT || 3000,
//     () => console.log('Server is running on port 3000')
// )


const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/addUser', async (req, res) => {
    const isUserExists = await User.findOne({
        email:
            req.body.email
    });

    if (isUserExists) {
        return res.status(400).send('User already exists');
    }

    const user = new User(req.body);
    user.save().then(() => {
        res.send('User added');
    }).catch(err => {
        res.status(400).send('Unable to save user');
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
})
const axios = require('axios');


for (let i = 0; i < 1000; i++) {
    axios.post('https://backend.trothalo.click/api/v1/resendCode',  {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(`User added: ${response.data}`);
        })
        .catch(error => {
            console.error(`Error adding user: ${error.response ? error.response.data : error.message}`);
        });
}

