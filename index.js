const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

mongoose.connect('mongodb+srv://lakithrandula6:d6kDa8pAnfyvrMpW@backenddb.y0ollbh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send('Hello from Node API Server Updated.'); 
});

// app.get('/api/products', async (req, res) => {
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const products = await Product.findById(id);
//         res.status(200).json(products);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {
//     try{
//         const products = await Product.create(req.body);
//         res.status(200).json(products);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.put('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const products = await Product.findByIdAndUpdate(id, req.body);

//         if (!products){
//             return res.status(404).json({message: "Product not found!"})
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.delete('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const products = await Product.findByIdAndDelete(id);

//         if (!products){
//             return res.status(404).json({message: "Product not found!"})
//         }

//         res.status(200).json({msg: "Product deleted successfully!"});

//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });