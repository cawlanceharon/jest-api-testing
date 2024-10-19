
const createOrder = (req, res) => {
    const { productId, userId } = req.body;
    res.status(201).json({ message: 'Order placed successfully', data: { productId, userId } });
};

const getOrder = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Order ${id} found`, data: { id, productId: "123", userId: "456" } });
};

module.exports = { createOrder, getOrder };
