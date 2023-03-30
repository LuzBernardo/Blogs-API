module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        displayName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: 'users',
        underscored: true,
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost,
            { foreignKey: 'userId', as: 'blog_posts' });
    };

    return User;
};