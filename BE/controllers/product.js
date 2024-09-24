const db = require("../models");
const { Op, where } = require("sequelize");
const Product = db.product;
const Category = db.category;
const Brand = db.brand;
const Size = db.size;
const ProductSize = db.productSize;

const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId, {
      include: [
        { model: Category },
        { model: Brand },
        { model: Size, through: ProductSize },
      ],
    });
    if (!product) {
      throw new Error("Product not found");
    }

    const sizes = product.sizes.map((size) => ({
      size: size.size,
      quantity: size.productSize.quantity,
    }));

    // const relatedProducts = await Product.findAll({
    //   where: {
    //     categoryId: product.categoryId,
    //   },
    //   include: [
    //     { model: Category },
    //     { model: Brand },
    //     { model: Size, through: ProductSize },
    //   ],
    //   limit: 4,
    //   order: [["createdAt", "DESC"]],
    // });
    return res.json({ ...product.toJSON(), sizes });
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error.message });
  }
};

const filterProduct = async (req, res) => {
  try {
    const { name, minPrice, maxPrice, category, brand, size, sort, order } =
      req.query;

    const condition = {};
    const orderClause = [];

    const itemsPerPage = parseInt(req?.query?.items_per_page) || 10;
    const page = parseInt(req?.query?.page) || 1;

    if (name) {
      condition.name = { [Op.like]: `%${name}%` };
    }
    if (minPrice && maxPrice) {
      condition.price = { [Op.between]: [minPrice, maxPrice] };
    } else if (minPrice) {
      condition.price = { [Op.gte]: minPrice };
    } else if (maxPrice) {
      condition.price = { [Op.lte]: maxPrice };
    }

    if (sort && order) {
      orderClause.push([sort, order.toUpperCase() === "DESC" ? "DESC" : "ASC"]);
    }

    const { count, rows } = await Product.findAndCountAll({
      nest: true,
      distinct: true,
      include: [
        {
          model: Brand,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
          where: brand ? { name: { [Op.like]: `%${brand}%` } } : {},
        },
        {
          model: Category,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
          where: category ? { name: { [Op.like]: `%${category}%` } } : {},
        },

        {
          model: Size,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
          through: {
            model: ProductSize,
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
          },
          where: size ? { size: size } : {},
        },
      ],
      order: orderClause,
      where: condition,
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
    });

    // Transform the rows to modify the sizes structure
    const formattedRows = rows.map((product) => {
      const sizes = product.sizes.map((size) => ({
        size: size.size,
        quantity: size.productSize.quantity,
      }));
      return {
        ...product.toJSON(),
        sizes,
      };
    });

    const pagination = {
      currentPage: page,
      itemsPerPage,
      totalRecords: count,
      totalPages: Math.ceil(count / itemsPerPage),
    };

    return res.json({
      data: formattedRows,
      pagination,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getSingleProduct,
  filterProduct,
};
