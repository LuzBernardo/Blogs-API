const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const userServices = require('./userServices');
const categoriesServices = require('./categoriesServices');
/* const { userServices, categoriesServices } = require('./index'); */

const addPost = async (post) => {
    const result = await BlogPost.create(post);

    return result;
};

const addPostCategory = async (postId, category) => {
    const results = [];
    await category.forEach(async (c) => {
        const result = await PostCategory.create({ postId, categoryId: c });
        
        results.push(result);
    });

    return results;
};

const getAllPost = async () => {
    const result = await BlogPost.findAll();

    return result;
};

const getPost = async (postId) => {
    const result = await BlogPost.findOne({ where: { id: postId } });

    return result;
};

const getAllPostInfo = async () => {
    const post = await getAllPost();
    const user = await userServices.userGetAll();
    const cate = await categoriesServices.getCategories();

    const result = post.map((p) => {
            const { id, title, content, userId, published, updated } = p.dataValues;
            const { id: idU, displayName: dU, email: eU, image: iU } = user
                .find((u) => u.dataValues.id === userId);
            return ({ id,
                title,
                content,
                userId,
                published,
                updated,
            user: { id: idU, displayName: dU, email: eU, image: iU },
            categories: cate.filter((c) => c.id === id).map((c) => ({ id: c.id, name: c.name })),
        });
    });

    return result;
};

const getPostInfo = async (postId) => {
    const post = await getPost(postId);
    const user = await userServices.userGetAll();
    const cate = await categoriesServices.getCategories();

    if (!post) return undefined;

    const { id, title, content, userId, published, updated } = post.dataValues;
    const { id: idU, displayName: dU, email: eU, image: iU } = user
    .find((u) => u.dataValues.id === userId);

    const result = { id,
                title,
                content,
                userId,
                published,
                updated,
            user: { id: idU, displayName: dU, email: eU, image: iU },
            categories: cate.filter((c) => c.id === id).map((c) => ({ id: c.id, name: c.name })),
        };

    return result;
};

const updatePostInfo = async (id, body) => {
    const { title, content } = body;
    await BlogPost.update(
        { title, content },
        { where: { id } },
    );
    const post = await getPostInfo(id);

    return post;
};

const deletePostById = async (id) => {
    const result = await BlogPost.destroy({ where: { id } });

    return result;
};

const getPostByQ = async (q) => {
    const allPosts = await getAllPostInfo();

    const result = allPosts.filter((p) => p.title.includes(q) || p.content.includes(q));

    return result;
};

module.exports = {
    addPost,
    addPostCategory,
    getAllPost,
    getAllPostInfo,
    getPostInfo,
    updatePostInfo,
    deletePostById,
    getPostByQ,
};