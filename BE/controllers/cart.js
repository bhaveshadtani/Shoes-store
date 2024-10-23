const { Op } = require("sequelize");
const db = require("../models");
const Product = db.product;
const ProductVariation = db.productVariation;
const Cart = db.cart;
const CartItem = db.cartItem;
const Category = db.category;
const Brand = db.brand;
const Size = db.size;
const Color = db.color;
const Image = db.image;

// CODE WITH USING TRANSACTION (to prevent simultaneous updates to the same stock item)
// const addCart = async (req, res) => {
//   const transaction = await db.sequelize.transaction(); // Start a transaction
//   try {
//     const { loggedUserId, loggedUserDetails } = req?.user || null;
//     let { product_variant_id, product_id, quantity } = req.body;

//     // Validate quantity
//     if (quantity <= 0) throw new Error("Quantity must be more than 0.");
//     if (quantity > 5) throw new Error("Only 5 unit(s) allowed per order.");

//     // Lock the stock row during transaction to prevent other users from accessing it
//     const variation = await ProductVariation.findOne({
//       where: { id: product_variant_id },
//       include: [{ model: Product, where: { id: product_id } }],
//       lock: transaction.LOCK.UPDATE, // This locks the row for this transaction
//       transaction, // Ensure it's part of the transaction
//     });

//     if (!variation) {
//       await transaction.rollback();
//       return res
//         .status(400)
//         .json({ message: "Product or product variant does not exist." });
//     }

//     // Check available stock
//     if (quantity > variation.quantity) {
//       throw new Error(
//         `Insufficient stock. Only ${variation.quantity} items available.`
//       );
//     }

//     // Adjust logic based on user login state
//     const updateCartLogic = async () => {
//       if (loggedUserId) {
//         let userCart = await Cart.findOne({
//           where: { user_id: loggedUserId },
//           transaction,
//         });

//         if (!userCart) {
//           userCart = await Cart.create({ user_id: loggedUserId }, { transaction });
//         }

//         // Check or create cart item
//         let cartItem = await CartItem.findOne({
//           where: { cart_id: userCart.id, product_id, product_variant_id },
//           transaction, // Ensure it's part of the transaction
//         });

//         if (cartItem) {
//           variation.quantity += cartItem.quantity; // Restock previous quantity
//           cartItem.quantity = quantity;
//           variation.quantity -= quantity; // Deduct new quantity
//           await cartItem.save({ transaction });
//         } else {
//           await CartItem.create(
//             {
//               cart_id: userCart.id,
//               product_id,
//               product_variant_id,
//               quantity,
//             },
//             { transaction }
//           );
//           variation.quantity -= quantity; // Deduct from stock
//         }

//         await variation.save({ transaction });
//         return "Product quantity updated in cart successfully.";
//       } else {
//         let cartStorage = req.cookies.cartData
//           ? JSON.parse(req.cookies.cartData)
//           : [];

//         const existingItem = cartStorage.find(
//           (item) => item.product_variant_id === product_variant_id
//         );

//         if (existingItem) {
//           existingItem.quantity = quantity;
//         } else {
//           cartStorage.push({ product_variant_id, product_id, quantity });
//         }

//         res.cookie("cartData", JSON.stringify(cartStorage), {
//           httpOnly: true,
//           maxAge: 3600000, // 1 hour
//         });

//         return "Product added/updated in cart successfully (not logged in).";
//       }
//     };

//     const message = await updateCartLogic();
//     await transaction.commit(); // Commit the transaction
//     return res.json({ message });
//   } catch (error) {
//     await transaction.rollback(); // Rollback in case of an error
//     console.error("Error adding to cart:", error);
//     return res.status(400).json({ message: error.message });
//   }
// };

const addCart = async (req, res) => {
  try {
    const loggedUserId = req?.user?.loggedUserId || null;
    console.log(loggedUserId, "Logged in ***")
    let { product_variant_id, product_id, quantity } = req.body;

    // Validate quantity
    if (quantity <= 0) throw new Error("Quantity must be more than 0.");
    if (quantity > 5)
      throw new Error("We're sorry! Only 5 unit(s) allowed in each order.");

    // Check if product and variant exist
    const productExists = await Product.findByPk(product_id);
    const variation = await ProductVariation.findByPk(product_variant_id);
    if (!productExists || !variation) {
      return res.status(400).json({
        message: "Product or product variant does not exist.",
      });
    }

    // Check if the variant is associated with the product
    if (variation.product_id !== product_id) {
      throw new Error("Something went wrong!");
    }

    // Check available stock
    if (quantity > variation.quantity) {
      throw new Error(
        `Insufficient stock. Only ${variation.quantity} items available.`
      );
    }

    if (loggedUserId) {
      // User is logged in
      let userCart = await Cart.findOne({ where: { user_id: loggedUserId } });
      if (!userCart) {
        userCart = await Cart.create({ user_id: loggedUserId });
      }

      // Check for existing cart item
      let cartItem = await CartItem.findOne({
        where: {
          cart_id: userCart.id,
          product_id,
          product_variant_id,
        },
      });

      if (cartItem) {
        // Adjust the variant quantity
        variation.quantity += cartItem.quantity; // Return previous quantity to stock
        variation.quantity -= quantity; // Deduct new requested quantity
        cartItem.quantity = quantity; // Update cart item with new quantity
        await cartItem.save();
      } else {
        // New item being added to the cart
        variation.quantity -= quantity; // Deduct quantity from stock
        await CartItem.create({
          cart_id: userCart.id,
          product_id,
          product_variant_id,
          quantity,
        });
      }

      await variation.save();

      return res.json({
        message: "Product quantity updated in cart successfully.",
      });
    } else {
      // User is not logged in
      let cartStorage = req.cookies.cartData
        ? JSON.parse(req.cookies.cartData)
        : [];

      const existingItem = cartStorage.find(
        (item) => item.product_variant_id === product_variant_id
      );

      if (existingItem) {
        // Update the quantity in the cookie cart
        existingItem.quantity = quantity;
      } else {
        // Add new item to the cookie cart
        cartStorage.push({ product_variant_id, product_id, quantity });
      }

      res.cookie("cartData", JSON.stringify(cartStorage), {
        httpOnly: true,
        maxAge: 3600000, // 1 hour
      });

      return res.json({
        message: "Product added / updated in cart successfully (not logged in).",
      });
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(400).json({ message: error.message });
  }
};

// const viewCart = async (req, res) => {
//   try {
//     const { loggedUserId, loggedUserDetails } = req?.user || null;

//     // If user is not logged in, check the cart in cookies
//     if (!loggedUserId) {
//       const cartData = req?.cookies?.cartData
//         ? JSON.parse(req?.cookies?.cartData)
//         : [];

//       if (cartData.length !== 0) {
//         // Format cart items from cookies
//         const cartItems = await ProductVariation.findAll({
//           where: {
//             id: cartData.map((data) => data.product_variant_id),
//             product_id: cartData.map((data) => data.product_id),
//           },

//           attributes: ["size_id", "color_id"],
//           include: [
//             {
//               model: Product,
//               attributes: {
//                 exclude: [
//                   "brand_id",
//                   "category_id",
//                   "description",
//                   "updatedAt",
//                   "createdAt",
//                   "deletedAt",
//                 ],
//               },
//               include: [{ model: Brand }, { model: Category }],
//             },
//             { model: Size, attributes: ["size"] },
//             { model: Color, attributes: ["color"] },
//             {
//               model: Image,
//               attributes: ["url"],
//               where: { is_main: true },
//               required: false,
//             },
//           ],
//         });

//         const formattedCartItems = formatCartItemsFromCookie(
//           cartItems,
//           cartData
//         );

//         return res.json({
//           cart: {
//             loggedUserId: null,
//             items:
//               formattedCartItems.length === 0
//                 ? "Your cart is currently empty."
//                 : formattedCartItems,
//           },
//         });
//       }

//       // If no cookie exists, return an empty cart
//       return res.json({
//         cart: {
//           loggedUserId: null,
//           items: "Your cart is currently empty.",
//         },
//       });
//     }

//     // Handle logged-in users
//     const userCart = await Cart.findOne({ where: { user_id: loggedUserId } });
//     if (!userCart) throw new Error("User cart not found.");

//     // Fetch cart items from the database, including product and variation details
//     const cartItems = await CartItem.findAll({
//       where: { cart_id: userCart.id },
//       include: [
//         {
//           model: Product,
//           attributes: [
//             "id",
//             "name",
//             "gender",
//             "price",
//             "discount",
//             "is_active",
//             "is_featured",
//           ],
//           include: [
//             { model: Brand, attributes: ["name"] },
//             { model: Category, attributes: ["name"] },
//           ],
//         },
//         {
//           model: ProductVariation,
//           attributes: ["size_id", "color_id"],
//           include: [
//             { model: Size, attributes: ["size"] },
//             { model: Color, attributes: ["color"] },
//             {
//               model: Image,
//               attributes: ["url"],
//               where: { is_main: true },
//             },
//           ],
//         },
//       ],
//     });

//     // If there are no items in the cart
//     if (cartItems.length === 0) {
//       return res.json({
//         cart: {
//           loggedUserId,
//           items: "Your cart is currently empty.",
//         },
//       });
//     }

//     // Format the cart items for the response
//     const formattedCartItems = formatCartItemsFromDb(cartItems);

//     return res.json({
//       cart: {
//         loggedUserId,
//         items: formattedCartItems,
//       },
//     });
//   } catch (error) {
//     console.error("Error retrieving cart:", error);
//     return res.status(400).json({ message: error.message });
//   }
// };

const viewCart = async (req, res) => {
  try {
    const loggedUserId = req?.user?.loggedUserId || null;

    // Helper: Return empty cart
    const returnEmptyCart = (loggedUserId) => {
      return res.json({
        cart: {
          loggedUserId,
          items: "Your cart is currently empty.",
        },
      });
    };

    // Helper: Fetch product variation details for cookie-based cart
    const getProductVariationsForCart = async (cartData) => {
      const productVariantIds = cartData.map((data) => data.product_variant_id);

      return await ProductVariation.findAll({
        where: { id: { [Op.in]: productVariantIds } },

        attributes: ["size_id", "color_id"],
        include: [
          {
            model: Product,
            attributes: [
              "id",
              "name",
              "gender",
              "discount",
              "is_active",
              "is_featured",
            ],
            include: [
              { model: Brand, attributes: ["name"] },
              { model: Category, attributes: ["name"] },
            ],
          },
          { model: Size, attributes: ["size"] },
          { model: Color, attributes: ["color"] },
          {
            model: Image,
            attributes: ["url"],
            where: { is_main: true },
            required: false,
          },
        ],
      });
    };

    // 1. Handle non-logged-in users (cookie-based cart)
    if (!loggedUserId) {
      const cartData = req?.cookies?.cartData
        ? JSON.parse(req.cookies.cartData)
        : [];
      if (cartData.length === 0) return returnEmptyCart(null);

      // Fetch product variations for the items stored in cookies
      const cartItems = await getProductVariationsForCart(cartData);
      const formattedCartItems = formatCartItems(cartItems, cartData);

      return res.json({
        cart: {
          loggedUserId: null,
          items:
            formattedCartItems.length === 0
              ? "Your cart is currently empty."
              : formattedCartItems,
        },
      });
    }

    // 2. Handle logged-in users
    const userCart = await Cart.findOne({ where: { user_id: loggedUserId } });
    if (!userCart) return returnEmptyCart(loggedUserId);

    // Fetch cart items from the database
    const cartItems = await CartItem.findAll({
      where: { cart_id: userCart.id },
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "name",
            "gender",
            "discount",
            "is_active",
            "is_featured",
          ],
          include: [
            { model: Brand, attributes: ["name"] },
            { model: Category, attributes: ["name"] },
          ],
        },
        {
          model: ProductVariation,
          attributes: ["unit_price", "size_id", "color_id"],
          include: [
            { model: Size, attributes: ["size"] },
            { model: Color, attributes: ["color"] },
            {
              model: Image,
              attributes: ["url"],
              where: { is_main: true },
            },
          ],
        },
      ],
    });

    if (cartItems.length === 0) return returnEmptyCart(loggedUserId);

    const formattedCartItems = formatCartItems(cartItems);

    return res.json({
      cart: {
        loggedUserId,
        items: formattedCartItems,
      },
    });
  } catch (error) {
    console.error("Error retrieving cart:", error);
    return res.status(400).json({ message: error.message });
  }
};

// Helper function to format cart items
const formatCartItems = (items, cartData = null) => {
  return items.map((item) => {
    const cartItem = cartData
      ? cartData.find((data) => data.product_id === item.product.id)
      : null;

    return {
      cart_item_id: !cartData ? item.id : null,
      product: {
        product_id: item.product.id,
        product_variant_id: item.product_variant_id,
        name: item.product.name,
        gender: item.product.gender,
        quantity: cartItem ? cartItem.quantity : cartData ? 0 : item.quantity,
        unit_price: item.productVariation.unit_price,
        discount: item.product.discount,
        brand: item.product.brand.name,
        category: item.product.category.name,
        image:
          item.productVariation?.images[0]?.url || item?.images[0]?.url || null,
        size: item.productVariation
          ? item.productVariation.size.size
          : item.size.size,
        color: item.productVariation
          ? item.productVariation.color.color
          : item.color.color,
        is_active: item.product.is_active,
        is_featured: item.product.is_featured,
      },
    };
  });
};

const removeCart = async (req, res) => {
  try {
    const loggedUserId = req?.user?.loggedUserId || null;
    const { cart_item_id } = req.body;

    // Validate input
    if (!cart_item_id) {
      return res.status(400).json({ message: "Cart item ID is required." });
    }

    // Find the user's cart and the cart item to remove
    const userCart = await Cart.findOne({
      where: { user_id: loggedUserId },
      include: [
        {
          model: CartItem,
          where: { id: cart_item_id },
          include: [ProductVariation],
        },
      ],
    });

    if (!userCart || !userCart.cartItems.length) {
      return res.status(404).json({ message: "Cart or cart item not found." });
    }

    const cartItem = userCart.cartItems[0];

    // Increase the quantity of the original product variant
    cartItem.productVariation.quantity += cartItem.quantity; // Add back the quantity
    await cartItem.productVariation.save();

    // Remove the cart item
    await cartItem.destroy();

    // Check if there are no more cart items then delete the cart
    const updatedCart = await Cart.findOne({
      where: { user_id: loggedUserId },
      include: [CartItem],
    });

    if (updatedCart && updatedCart.cartItems.length === 0) {
      await updatedCart.destroy(); // Delete the empty cart
    }

    return res.json({ message: "Cart item removed successfully." });
  } catch (error) {
    console.error("Error removing from cart:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  addCart,
  viewCart,
  removeCart,
};
