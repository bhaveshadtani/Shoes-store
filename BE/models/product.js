module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
      validate: {
        isDecimal: true, // Ensure price is a decimal
        min: 0, // Ensure price is non-negative
      },
    },
    gender: {
      type: DataTypes.ENUM("Men", "Women", "Kids"),
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Category", // Reference the Categories table
        key: "id",
      },
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Brand", // Reference the Brands table
        key: "id",
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  Product.afterFind(async (products) => {
    if (!Array.isArray(products)) {
      products = [products];
    }

    // Fetch category names for each product
    const categoryBrandPromises = products.map(async (product) => {
      const category = await sequelize.models.category.findByPk(
        product.category_id,
        {
          attributes: ["name"],
        }
      );

      // Fetch brand name
      const brand = await sequelize.models.brand.findByPk(product.brand_id, {
        attributes: ["name"],
      });
      const categoryName = category ? category.name : "";
      const brandName = brand ? "by " + brand.name : "";

      product.name =
        `${product.name} ${product.gender}'s ${categoryName} ${brandName}`.trim();
    });

    // Wait for all promises to resolve
    await Promise.all(categoryBrandPromises);
  });

  // Product.sync({alter: true})
  return Product;
};
