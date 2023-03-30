module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
        },
        categoryId: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: 'posts_categories',
        underscored: true,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category,
            {
                as: 'categories',
                through: PostCategory,
                foreignKey: 'categoryId',
                otherKey: 'postId',
            });
        models.Category.belongsToMany(models.BlogPost,
            {
                as: 'blog_posts',
                through: PostCategory,
                foreignKey: 'postId',
                otherKey: 'categoryId',
            });
    };

    return PostCategory;
};