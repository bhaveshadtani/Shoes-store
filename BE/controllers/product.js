const db = require("../models");
const { Op, where } = require("sequelize");
const Product = db.product;
const Category = db.category;
const Brand = db.brand;
const Size = db.size;
const Color = db.color;
const ProductVariation = db.productVariation;
const Image = db.image;
const Review = db.review;
const User = db.user;

const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    async function fetchProductDetails(product, isRelatedProduct) {
      let whereCondition = {};
      if (isRelatedProduct) {
        whereCondition = {
          category_id: product.category_id,
          gender: product.gender,
          id: { [Op.ne]: product.id }, // Exclude the current product
        };
      } else {
        whereCondition.id = product;
      }

      const prod = await Product.findAll({
        nest: true,
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        where: whereCondition,
        limit: 4, // Fetch related products
        include: [
          { model: Brand },
          { model: Category },
          { model: Image, attributes: ["url", "is_main"] },
          {
            model: ProductVariation,
            attributes: ["quantity"],
            include: [
              {
                model: Size,
                attributes: ["size"],
              },
              {
                model: Color,
                attributes: ["color"],
              },
            ],
          },
          ...(!isRelatedProduct
            ? [
                {
                  model: Review,
                  attributes: ["rating", "review"],
                  include: [
                    { model: User, attributes: ["first_name", "last_name"] },
                  ],
                },
              ]
            : []),
        ],
      });

      if (prod.length <= 0) {
        throw new Error("Product not found");
      }

      // Format product variations (size, color, quantity)
      const formattedProd = prod.map((product) => {
        const productVariations = product.productVariations.map((variant) => ({
          size: variant.size.size,
          color: variant.color.color,
          quantity: variant.quantity,
        }));

        return {
          ...product.toJSON(),
          productVariations,
        };
      });

      return formattedProd;
    }

    const productData = await fetchProductDetails(productId, false);
    const relatedProducts = await fetchProductDetails(productData[0], true);

    return res.json({
      product: productData[0],
      relatedProducts,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error.message });
  }
};

const filterProduct = async (req, res) => {
  try {
    const {
      name,
      minPrice,
      maxPrice,
      category,
      brand,
      size,
      color,
      gender,
      sort,
      order,
    } = req.query;

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
    if (gender) {
      condition.gender = gender;
    }

    if (sort && order) {
      orderClause.push([sort, order.toUpperCase() === "DESC" ? "DESC" : "ASC"]);
    }

    const { count, rows } = await Product.findAndCountAll({
      nest: true,
      // raw: true,
      distinct: true,
      include: [
        {
          model: Brand,
          where: brand ? { name: { [Op.like]: `%${brand}%` } } : {},
        },
        {
          model: Category,
          where: category ? { name: { [Op.like]: `%${category}%` } } : {},
        },
        {
          model: ProductVariation,
          attributes: ["quantity"],
          include: [
            {
              model: Size,
              attributes: ["size"],
              where: size ? { size: size } : {},
            },
            {
              model: Color,
              attributes: ["color"],
              where: color ? { color: color } : {},
            },
          ],
        },
      ],
      order: orderClause,
      where: condition,
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
    });

    // Format product variations (size, color, quantity)
    const formatProduct = rows.map((product) => {
      const productVariations = product.productVariations.map((variant) => ({
        size: variant.size.size,
        color: variant.color.color,
        quantity: variant.quantity,
      }));

      return {
        ...product.toJSON(),
        productVariations,
      };
    });

    const pagination = {
      currentPage: page,
      itemsPerPage,
      totalRecords: count,
      totalPages: Math.ceil(count / itemsPerPage),
    };

    return res.json({
      data: formatProduct,
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
