module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: 'categories',
        underscored: true,
    });

    Category.associate = (models) => {
        Category.hasMany(models.PostCategory,
            { foreignKey: 'categoryId', as: 'posts_categories' });
    };

    return Category;
};