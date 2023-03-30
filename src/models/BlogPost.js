module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: 'blog_posts',
        underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
            { foreignKey: 'userId', as: 'users' });
        BlogPost.hasMany(models.PostCategory,
            { foreignKey: 'postId', as: 'posts_categories' });
    };

    return BlogPost;
};