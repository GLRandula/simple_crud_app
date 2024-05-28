const Product = require('./models/product.model');

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const createProduct = async (req, res) => {
    try{
        const products = await Product.findById(req.body);
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);

        if (!products){
            return res.status(404).json({message: "Product not found!"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const products = await Product.findByIdAndDelete(id);

        if (!products){
            return res.status(404).json({message: "Product not found!"})
        }

        res.status(200).json({msg: "Product deleted successfully!"});

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getProducts,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};