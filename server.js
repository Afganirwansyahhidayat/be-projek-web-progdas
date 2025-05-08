const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/auth')
const auth = require('./middleware/auth')
const bodyParser = require('body-parser');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())

// router
app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes) 

// root cek
app.get('/', (req, res) => {
    res.send('API is running...');
})


// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));



// start server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
