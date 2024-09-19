const productData = [
  {
    name: "Air Zoom Pegasus 38",
    description:
      "The Air Zoom Pegasus 38 combines a lightweight mesh upper with responsive cushioning for a comfortable fit on any run.",
    price: 120.0,
    image_url: "https://via.placeholder.com/640x480?text=Air+Zoom+Pegasus+38",
    category: "Running Shoes",
    brand: "Nike",
    is_active: 1,
    is_featured: 1,
  },
  {
    name: "Ultraboost 21",
    description:
      "Experience endless energy with the Ultraboost 21, featuring a Primeknit upper for adaptive support and a Boost midsole for responsive cushioning.",
    price: 180.0,
    image_url: "https://via.placeholder.com/640x480?text=Ultraboost+21",
    category: "Running Shoes",
    brand: "Adidas",
    is_active: 1,
    is_featured: 1,
  },
  {
    name: "Air Force 1 '07",
    description:
      "A classic sneaker with a timeless design, the Air Force 1 '07 features premium materials and encapsulated Air cushioning for all-day comfort.",
    price: 110.0,
    image_url: "https://via.placeholder.com/640x480?text=Air+Force+1+'07",
    category: "Lifestyle Shoes",
    brand: "Nike",
    is_active: 1,
    is_featured: 1,
  },
  {
    name: "Gel-Kayano 27",
    description:
      "The Gel-Kayano 27 offers stability and support with its GEL technology, making it ideal for long-distance runners seeking comfort.",
    price: 160.0,
    image_url: "https://via.placeholder.com/640x480?text=Gel-Kayano+27",
    category: "Running Shoes",
    brand: "ASICS",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "New Balance 990v5",
    description:
      "The New Balance 990v5 combines a classic silhouette with modern performance features, delivering superior cushioning and support.",
    price: 175.0,
    image_url: "https://via.placeholder.com/640x480?text=New+Balance+990v5",
    category: "Lifestyle Shoes",
    brand: "New Balance",
    is_active: 1,
    is_featured: 1,
  },
  {
    name: "Hoka One One Clifton 7",
    description:
      "The Clifton 7 offers a soft, lightweight ride with ample cushioning and a breathable mesh upper, perfect for long-distance runners.",
    price: 140.0,
    image_url:
      "https://via.placeholder.com/640x480?text=Hoka+One+One+Clifton+7",
    category: "Running Shoes",
    brand: "Hoka One One",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "Puma RS-X Reinvent",
    description:
      "Featuring bold colorways and retro styling, the RS-X Reinvent is designed for comfort and impact absorption, making it a standout in urban fashion.",
    price: 110.0,
    image_url: "https://via.placeholder.com/640x480?text=Puma+RS-X+Reinvent",
    category: "Lifestyle Shoes",
    brand: "Puma",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "On Cloudstratus",
    description:
      "The Cloudstratus features dual CloudTec layers for maximum cushioning and stability, designed for runners seeking both performance and comfort.",
    price: 170.0,
    image_url: "https://via.placeholder.com/640x480?text=On+Cloudstratus",
    category: "Running Shoes",
    brand: "On",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "Skechers Go Walk 5",
    description:
      "The Go Walk 5 is designed for all-day comfort with its lightweight, responsive cushioning and a slip-on design that makes it easy to wear.",
    price: 90.0,
    image_url: "https://via.placeholder.com/640x480?text=Skechers+Go+Walk+5",
    category: "Walking Shoes",
    brand: "Skechers",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "Reebok Nano X1",
    description:
      "The Nano X1 is engineered for versatility, combining support for lifting with flexibility for running, making it ideal for any workout.",
    price: 140.0,
    image_url: "https://via.placeholder.com/640x480?text=Reebok+Nano+X1",
    category: "CrossFit Shoes",
    brand: "Reebok",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "Asics Gel-Nimbus 23",
    description:
      "The Gel-Nimbus 23 is designed for maximum comfort and cushioning, featuring a breathable upper and advanced gel technology for a smooth ride.",
    price: 160.0,
    image_url: "https://via.placeholder.com/640x480?text=Asics+Gel-Nimbus+23",
    category: "Running Shoes",
    brand: "Asics",
    is_active: 1,
    is_featured: 1,
  },
  {
    name: "Converse Chuck Taylor All Star",
    description:
      "An iconic sneaker known for its timeless style, the Chuck Taylor All Star features a canvas upper and rubber sole, perfect for casual wear.",
    price: 65.0,
    image_url: "https://via.placeholder.com/640x480?text=Converse+Chuck+Taylor",
    category: "Lifestyle Shoes",
    brand: "Converse",
    is_active: 1,
    is_featured: 1,
  },
  {
    name: "Salomon Speedcross 5",
    description:
      "The Speedcross 5 is built for trail running, featuring aggressive traction, a comfortable fit, and durable materials for rugged terrains.",
    price: 130.0,
    image_url: "https://via.placeholder.com/640x480?text=Salomon+Speedcross+5",
    category: "Trail Running Shoes",
    brand: "Salomon",
    is_active: 1,
    is_featured: 0,
  },
  {
    name: "New Balance Fresh Foam 1080v11",
    description:
      "The Fresh Foam 1080v11 provides plush cushioning and support with its innovative foam midsole, making it ideal for long-distance running.",
    price: 150.0,
    image_url:
      "https://via.placeholder.com/640x480?text=New+Balance+Fresh+Foam+1080v11",
    category: "Running Shoes",
    brand: "New Balance",
    is_active: 0,
    is_featured: 0,
  },
  {
    name: "Vans Old Skool",
    description:
      "The Vans Old Skool features a classic skate silhouette with signature side stripes, padded collars for comfort, and a durable canvas upper.",
    price: 70.0,
    image_url: "https://via.placeholder.com/640x480?text=Vans+Old+Skool",
    category: "Skate Shoes",
    brand: "Vans",
    is_active: 1,
    is_featured: 0,
  },
];

module.exports = productData;