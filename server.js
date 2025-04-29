const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

// router
app.use('/api/products', productRoutes)

// root cek
app.get('/', (req, res) => {
    res.send('API is running...');
})

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));



// start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
