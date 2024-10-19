
const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created successfully', data: { name, email } });
};

const getUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `User ${id} found`, data: { id, name: "John Doe" } });
};

module.exports = { createUser, getUser };
