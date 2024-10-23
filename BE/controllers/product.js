const db = require("../models");
const { Op, where, Sequelize } = require("sequelize");
const Product = db.product;
const Category = db.category;
const Brand = db.brand;
const Size = db.size;
const Color = db.color;
const ProductVariation = db.productVariation;
const Image = db.image;
const Review = db.review;
const User = db.user;

// const getSingleProduct = async (req, res) => {
//   try {
//     const { productId } = req.params;

//     async function fetchProductDetails(product, isRelatedProduct) {
//       let whereCondition = {};
//       if (isRelatedProduct) {
//         whereCondition = {
//           category_id: product.category_id,
//           gender: product.gender,
//           id: { [Op.ne]: product.id }, // Exclude the current product
//         };
//       } else {
//         whereCondition.id = product;
//       }

//       const prod = await Product.findAll({
//         nest: true,
//         attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
//         where: whereCondition,
//         limit: 4, // Fetch related products
//         include: [
//           { model: Brand },
//           { model: Category },
//           {
//             model: ProductVariation,
//             attributes: ["id", "quantity"],
//             include: [
//               { model: Image, attributes: ["url", "is_main"] },
//               {
//                 model: Size,
//                 attributes: ["size"],
//               },
//               {
//                 model: Color,
//                 attributes: ["color"],
//               },
//             ],
//           },
//           ...(!isRelatedProduct
//             ? [
//                 {
//                   model: Review,
//                   attributes: ["rating", "review"],
//                   include: [
//                     { model: User, attributes: ["first_name", "last_name"] },
//                   ],
//                 },
//               ]
//             : []),
//         ],
//       });

//       if (typeof product === "string" && prod.length <= 0) {
//         throw new Error("Product not found");
//       }

//       // Format product variations (size, color, quantity)
//       const formattedProd = prod.map((product) => {
//         const productVariations = product.productVariations.map((variant) => ({
//           id: variant.id,
//           size: variant.size.size,
//           color: variant.color.color,
//           quantity: variant.quantity,
//         }));

//         return {
//           ...product.toJSON(),
//           productVariations,
//         };
//       });

//       return formattedProd;
//     }

//     // Fetch product detail based on given ID
//     const productData = await fetchProductDetails(productId, false);
//     // Fetch related products based on fetched product details
//     const relatedProducts = await fetchProductDetails(productData[0], true);

//     return res.json({
//       product: productData[0],
//       relatedProducts,
//     });
//   } catch (error) {
//     console.log(error, "error");
//     res.status(400).json({ message: error.message });
//   }
// };

// const getSingleProduct = async (req, res) => {
//   try {
//     const { productVariationId } = req.params;

//     async function fetchProductDetails(productVariant, isRelatedProduct) {
//       let whereCondition = {};
//       if (isRelatedProduct) {
//         whereCondition = {
//           category_id: productVariant.product.category_id,
//           gender: productVariant.product.gender,
//           id: { [Op.ne]: productVariant.id }, // Exclude the current productVariant
//         };
//       } else {
//         whereCondition.id = productVariant;
//       }

//       const relatedProducts = await Product.findAll({
//         attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
//         where: productVariant !== "string" ? whereCondition : {},
//         include: [{ model: Brand }, { model: Category }],
//         limit: 4, // Fetch related productVariant variations
//       });

//       // console.log(relatedProducts, "relatedProducts");

//       const productVariations = await ProductVariation.findAll({
//         nest: true,
//         attributes: ["id", "quantity"],
//         where: productVariant === "string" ? whereCondition : {},
//         include: [
//           {
//             model: Product,
//             where: productVariant !== "string" ? whereCondition : {},
//             attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
//             include: [{ model: Brand }, { model: Category }],
//           },
//           {
//             model: Image,
//             attributes: ["url", "is_main"],
//           },
//           {
//             model: Size,
//             attributes: ["size"],
//           },
//           {
//             model: Color,
//             attributes: ["color"],
//           },
//           ...(!isRelatedProduct
//             ? [
//                 {
//                   model: Review,
//                   attributes: ["rating", "review"],
//                   include: [
//                     { model: User, attributes: ["first_name", "last_name"] },
//                   ],
//                 },
//               ]
//             : []),
//         ],
//       });

//       if (typeof productVariant === "string" && productVariations.length <= 0) {
//         throw new Error("Product not found");
//       }

//       // Format productVariant variations (size, color, quantity)
//       // const formattedProd = productVariations.map((productVariant) => {
//       //   // console.log(productVariant.toJSON(), "******");
//       //   const productVariations = {
//       //     id: productVariant.id,
//       //     brand: productVariant.product.brand.name,
//       //     category: productVariant.product.category.name,
//       //     size: productVariant.size.size,
//       //     color: productVariant.color.color,
//       //     quantity: productVariant.quantity,
//       //   };

//       //   return {
//       //     ...productVariant.toJSON(),
//       //     productVariations,
//       //   };
//       // });
//       const formattedProd = productVariations.map((productVariant) => {
//         return {
//           id: productVariant.id,
//           size: productVariant.size.size,
//           color: productVariant.color.color,
//           quantity: productVariant.quantity,
//           product: {
//             id: productVariant.product.id,
//             name: productVariant.product.name,
//             description: productVariant.product.description,
//             price: productVariant.product.price,
//             gender: productVariant.product.gender,
//             discount: productVariant.product.discount,
//             brand: productVariant.product.brand.name,
//             category_id: productVariant.product.category.id,
//             category: productVariant.product.category.name,
//             is_active: productVariant.product.is_active,
//             is_featured: productVariant.product.is_featured,
//           },
//           images: productVariant.images,
//           ...relatedProducts,
//         };
//       });

//       return formattedProd[0];
//     }

//     // Fetch productVariant detail based on given ID
//     const productVariantData = await fetchProductDetails(
//       productVariationId,
//       false
//     );
//     // Fetch related products based on fetched productVariant details
//     const relatedProducts = await fetchProductDetails(productVariantData, true);

//     console.log(productVariantData, "formattedProdformattedProd******");
//     return res.json({
//       productVariantData: productVariantData,
//       relatedProducts,
//     });
//   } catch (error) {
//     console.log(error, "error");
//     res.status(400).json({ message: error.message });
//   }
// };

const getSingleProduct = async (req, res) => {
  try {
    const { productVariationId } = req.params;

    // find specific product
    const productVariation = await ProductVariation.findByPk(
      productVariationId,
      {
        attributes: ["id", "quantity", "unit_price"],
        include: [
          {
            model: Product,
            attributes: { exclude: ["brand_id", "createdAt", "deletedAt"] },
            include: [
              { model: Brand, attributes: ["name"] },
              { model: Category, attributes: ["name"] },
              {
                model: ProductVariation,
                attributes: ["id", "quantity", "unit_price"],
                where: {
                  quantity: { [Op.gt]: 0 },
                },
                include: [
                  { model: Size },
                  { model: Color },
                  {
                    model: Image,
                    attributes: ["url"],
                    where: { is_main: true },
                  },
                ],
              },
            ],
          },
          { model: Image, attributes: ["url", "is_main"] },
          {
            model: Review,
            attributes: ["rating", "review"],
            include: [{ model: User, attributes: ["first_name", "last_name"] }],
          },
        ],
      }
    );

    if (!productVariation) {
      return res.status(404).json({ message: "Product not found" });
    }

    const relatedProducts = await Product.findAll({
      nest: true,
      raw: true,
      attributes: {
        exclude: ["brand_id", "createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        category_id: productVariation.product.category_id,
        gender: productVariation.product.gender,
        id: { [Op.ne]: productVariation.product.id },
      },
      include: [
        {
          model: ProductVariation,
          attributes: ["id", "product_id", "quantity", "unit_price"],
          include: [
            { model: Size },
            { model: Color },
            {
              model: Image,
              attributes: ["url"],
              where: { is_main: true },
            },
          ],
          required: true,
          where: {
            quantity: { [Op.gt]: 0 },
          },
        },
        { model: Brand, attributes: ["name"] },
        { model: Category, attributes: ["name"] },
      ],
      group: ["product_id", "color"],
    });

    // Format the related products
    const formattedRelatedProducts = relatedProducts.map((product) => ({
      product_id: product.id,
      name: product.name,
      description: product.description,
      unit_price: product.productVariations.unit_price,
      gender: product.gender,
      discount: product.discount,
      category_id: product.category_id,
      is_active: product.is_active,
      is_featured: product.is_featured,
      brand_name: product.brand.name,
      category_name: product.category.name,
      product_variant_id: product.productVariations.id,
      product_id: product.productVariations.product_id,
      quantity: product.productVariations.quantity,
      size: product.productVariations.size.size,
      color: product.productVariations.color.color,
      image: product.productVariations.images.url,
    }));

    // formatted product response
    const formattedProductResponse = {
      product_variant_id: productVariation.id,
      product_id: productVariation.product.id,
      name: productVariation.product.name,
      description: productVariation.product.description,
      unit_price: productVariation.unit_price,
      gender: productVariation.product.gender,
      discount: productVariation.product.discount,
      category_id: productVariation.product.category_id,
      is_active: productVariation.product.is_active,
      is_featured: productVariation.product.is_featured,
      updatedAt: productVariation.product.updatedAt,
      brand_name: productVariation.product.brand.name,
      category_name: productVariation.product.category.name,
      productVariations: productVariation.product.productVariations.map(
        (variation) => ({
          product_variant_id: variation.id,
          quantity: variation.quantity,
          size: variation.size.size,
          color: variation.color.color,
          image: variation.images[0].url,
        })
      ),
      images: productVariation.images,
      reviews: productVariation.reviews.map((review) => ({
        rating: review.rating,
        review: review.review,
        user_name: `${review.user.first_name} ${review.user.last_name}`,
      })),
    };

    return res.json({
      productDetail: formattedProductResponse,
      relatedProducts: formattedRelatedProducts,
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
      sort = "updated_at",
      order,
    } = req.query;

    const productCondition = {};
    const variantCondition = {};
    const orderClause = [];

    const itemsPerPage = parseInt(req?.query?.items_per_page) || 10;
    const page = parseInt(req?.query?.page) || 1;

    if (name) {
      productCondition.name = { [Op.like]: `%${name}%` };
    }
    if (minPrice && maxPrice) {
      variantCondition.unit_price = { [Op.between]: [minPrice, maxPrice] };
    } else if (minPrice) {
      variantCondition.unit_price = { [Op.gte]: minPrice };
    } else if (maxPrice) {
      variantCondition.unit_price = { [Op.lte]: maxPrice };
    }
    if (gender) {
      productCondition.gender = gender;
    }

    // if (sort && order) {
    //   orderClause.push([sort, order.toUpperCase() === "DESC" ? "DESC" : "ASC"]);
    // }

    const { count, rows } = await ProductVariation.findAndCountAll({
      nest: true,
      raw: true,
      attributes: [
        "id",
        "product_id",
        "quantity",
        "unit_price",
        ...(sort === "unit_price"
          ? [[db.sequelize.col(`ProductVariation.${sort}`), "sortBy"]]
          : [[db.sequelize.col(`Product.${sort}`), "sortBy"]]),
      ],
      where: variantCondition,
      distinct: true,
      include: [
        {
          model: Product,
          attributes: {
            exclude: ["createdAt", "deletedAt"],
          },
          include: [
            {
              model: Brand,
              attributes: ["name"],
              where: brand ? { name: { [Op.like]: `%${brand}%` } } : {},
            },
            {
              model: Category,
              attributes: ["name"],
              where: category ? { name: { [Op.like]: `%${category}%` } } : {},
            },
          ],
          where: productCondition,
        },
        {
          model: Image,
          attributes: ["url"],
          where: { is_main: true },
        },
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
      order: sort
        ? [
            [
              db.sequelize.col("sortBy"),
              order?.toUpperCase() === "DESC" ? "DESC" : "ASC",
            ],
          ]
        : [],
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
    });

    // Transform the response
    const transformedData = rows.map((row) => {
      const product = row.product;
      return {
        product_variant_id: row.id,
        product_id: row.product_id,
        // product: {
        // id: product.id,
        name: product.name,
        description: product.description,
        brand_name: product.brand.name,
        category_name: product.category.name,
        gender: product.gender,
        unit_price: row.unit_price,
        discount: product.discount,
        is_active: product.is_active,
        is_featured: product.is_featured,
        updatedAt: product.updatedAt,
        // },
        image: row.images.url,
        size: row.size.size,
        color: row.color.color,
        quantity: row.quantity,
      };
    });

    const pagination = {
      currentPage: page,
      itemsPerPage,
      totalRecords: count,
      totalPages: Math.ceil(count / itemsPerPage),
    };

    // Return the transformed response
    res.json({
      data: transformedData,
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
