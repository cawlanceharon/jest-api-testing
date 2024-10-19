
const createProduct = (req, res) => {
    const { name, price } = req.body;
    res.status(201).json({ message: 'Product created successfully', data: { name, price } });
};

const getProduct = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Product ${id} found`, data: { id, name: "Laptop", price: 1200 } });
};

module.exports = { createProduct, getProduct };
