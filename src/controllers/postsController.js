const { postsServices } = require('../services');

function now() {
    return new Date().toISOString();
}

const addPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { dataValues: { id: userId } } = req.user;

    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (categoryIds.some((c) => c !== 1 && c !== 2)) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    const result = await postsServices
        .addPost({ title, content, categoryIds, userId, updated: now(), published: now() });

    const { dataValues: { id } } = result;

    await postsServices.addPostCategory(id, categoryIds);

    return res.status(201).json({ id, title, content, userId, updated: now(), published: now() });
};

const getAllPostInfo = async (_req, res) => {
    const result = await postsServices.getAllPostInfo();

    return res.status(200).json(result);
};

const getPostInfo = async (req, res) => {
    const { id } = req.params;
    const result = await postsServices.getPostInfo(id);
    if (!result) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(result);
};

const updatePostController = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const result = await postsServices.getPostInfo(id);
    if (!result) { return res.status(404).json({ message: 'Post does not exist' }); }

    if (req.user.dataValues.id !== result.userId) {
        return res.status(401).json({
            message: 'Unauthorized user',
        });
    }

    if (!title || !content) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }

    const updatePost = await postsServices.updatePostInfo(id, req.body);
    console.log('printado', updatePost);

    return res.status(200).json(updatePost);
};

const deletePost = async (req, res) => {
    const { id } = req.params;

    const result = await postsServices.getPostInfo(id);
    if (!result) { return res.status(404).json({ message: 'Post does not exist' }); }

    if (req.user.dataValues.id !== result.userId) {
        return res.status(401).json({
            message: 'Unauthorized user',
        });
    }
    
    await postsServices.deletePostById(id);

    return res.sendStatus(204);
};

const deleteUser = async (req, res) => {
    console.log('req.user', req.user);
    await postsServices.deletePostById(req.user.dataValues.id);

    return res.sendStatus(204);
};

const getPostByQuery = async (req, res) => {
    const { q } = req.query;

    const result = await postsServices.getPostByQ(q);

    return res.status(200).json(result);
};

module.exports = {
    addPost,
    getAllPostInfo,
    getPostInfo,
    updatePostController,
    deletePost,
    deleteUser,
    getPostByQuery,
};