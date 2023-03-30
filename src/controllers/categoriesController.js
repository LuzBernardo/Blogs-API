const { categoriesServices } = require('../services');

const addCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const result = await categoriesServices.addCategory(name);

    return res.status(201).json({
        id: result.insertId,
        name,
    });
};

const getCategories = async (_req, res) => {
    const result = await categoriesServices.getCategories();

    return res.status(200).json(result);
};

module.exports = {
    addCategory,
    getCategories,
};