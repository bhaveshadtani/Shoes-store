const imageData = [
  {
    url: "https://unsplash.com/photos/blue-trainers-on-colorful-leaves-on-the-ground-autumn-nature-kYfWXbyuh-s",
    is_main: true,
    product_variant_id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1537636568536-a2e00b44cb85?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: false,
    product_variant_id: 1,
  },
  {
    url: "https://example.com/image1-3.jpg",
    is_main: false,
    product_variant_id: 1,
  },
  {
    url: "https://example.com/image1-4.jpg",
    is_main: false,
    product_variant_id: 1,
  },
  {
    url: "https://example.com/image1-5.jpg",
    is_main: false,
    product_variant_id: 1,
  },

  {
    url: "https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 2,
  },
  {
    url: "https://example.com/image2-2.jpg",
    is_main: false,
    product_variant_id: 2,
  },
  {
    url: "https://example.com/image2-3.jpg",
    is_main: false,
    product_variant_id: 2,
  },
  {
    url: "https://example.com/image2-4.jpg",
    is_main: false,
    product_variant_id: 2,
  },
  {
    url: "https://example.com/image2-5.jpg",
    is_main: false,
    product_variant_id: 2,
  },

  {
    url: "https://images.unsplash.com/photo-1580906853149-f82f7601d205?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 3,
  },
  {
    url: "https://example.com/image3-2.jpg",
    is_main: false,
    product_variant_id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: false,
    product_variant_id: 3,
  },
  {
    url: "https://example.com/image3-4.jpg",
    is_main: false,
    product_variant_id: 3,
  },
  {
    url: "https://example.com/image3-5.jpg",
    is_main: false,
    product_variant_id: 3,
  },

  {
    url: "https://plus.unsplash.com/premium_photo-1663100769321-9eb8fe5a8e6b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 4,
  },
  {
    url: "https://example.com/image4-2.jpg",
    is_main: false,
    product_variant_id: 4,
  },
  {
    url: "https://example.com/image4-3.jpg",
    is_main: false,
    product_variant_id: 4,
  },
  {
    url: "https://example.com/image4-4.jpg",
    is_main: false,
    product_variant_id: 4,
  },
  {
    url: "https://example.com/image4-5.jpg",
    is_main: false,
    product_variant_id: 4,
  },

  {
    url: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 5,
  },
  {
    url: "https://example.com/image5-2.jpg",
    is_main: false,
    product_variant_id: 5,
  },
  {
    url: "https://example.com/image5-3.jpg",
    is_main: false,
    product_variant_id: 5,
  },
  {
    url: "https://example.com/image5-4.jpg",
    is_main: false,
    product_variant_id: 5,
  },
  {
    url: "https://example.com/image5-5.jpg",
    is_main: false,
    product_variant_id: 5,
  },

  {
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 6,
  },
  {
    url: "https://example.com/image6-2.jpg",
    is_main: false,
    product_variant_id: 6,
  },
  {
    url: "https://example.com/image6-3.jpg",
    is_main: false,
    product_variant_id: 6,
  },
  {
    url: "https://example.com/image6-4.jpg",
    is_main: false,
    product_variant_id: 6,
  },
  {
    url: "https://example.com/image6-5.jpg",
    is_main: false,
    product_variant_id: 6,
  },

  {
    url: "https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 7,
  },
  {
    url: "https://example.com/image7-2.jpg",
    is_main: false,
    product_variant_id: 7,
  },
  {
    url: "https://example.com/image7-3.jpg",
    is_main: false,
    product_variant_id: 7,
  },
  {
    url: "https://example.com/image7-4.jpg",
    is_main: false,
    product_variant_id: 7,
  },
  {
    url: "https://example.com/image7-5.jpg",
    is_main: false,
    product_variant_id: 7,
  },

  {
    url: "https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 8,
  },
  {
    url: "https://example.com/image8-2.jpg",
    is_main: false,
    product_variant_id: 8,
  },
  {
    url: "https://example.com/image8-3.jpg",
    is_main: false,
    product_variant_id: 8,
  },
  {
    url: "https://example.com/image8-4.jpg",
    is_main: false,
    product_variant_id: 8,
  },
  {
    url: "https://example.com/image8-5.jpg",
    is_main: false,
    product_variant_id: 8,
  },

  {
    url: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 9,
  },
  {
    url: "https://example.com/image9-2.jpg",
    is_main: false,
    product_variant_id: 9,
  },
  {
    url: "https://example.com/image9-3.jpg",
    is_main: false,
    product_variant_id: 9,
  },
  {
    url: "https://example.com/image9-4.jpg",
    is_main: false,
    product_variant_id: 9,
  },
  {
    url: "https://example.com/image9-5.jpg",
    is_main: false,
    product_variant_id: 9,
  },

  {
    url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 10,
  },
  {
    url: "https://example.com/image10-2.jpg",
    is_main: false,
    product_variant_id: 10,
  },
  {
    url: "https://example.com/image10-3.jpg",
    is_main: false,
    product_variant_id: 10,
  },
  {
    url: "https://example.com/image10-4.jpg",
    is_main: false,
    product_variant_id: 10,
  },
  {
    url: "https://example.com/image10-5.jpg",
    is_main: false,
    product_variant_id: 10,
  },

  {
    url: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 11,
  },
  {
    url: "https://example.com/image11-2.jpg",
    is_main: false,
    product_variant_id: 11,
  },
  {
    url: "https://example.com/image11-3.jpg",
    is_main: false,
    product_variant_id: 11,
  },
  {
    url: "https://example.com/image11-4.jpg",
    is_main: false,
    product_variant_id: 11,
  },
  {
    url: "https://example.com/image11-5.jpg",
    is_main: false,
    product_variant_id: 11,
  },

  {
    url: "https://images.unsplash.com/photo-1547701865-941c3731e8af?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 12,
  },
  {
    url: "https://example.com/image12-2.jpg",
    is_main: false,
    product_variant_id: 12,
  },
  {
    url: "https://example.com/image12-3.jpg",
    is_main: false,
    product_variant_id: 12,
  },
  {
    url: "https://example.com/image12-4.jpg",
    is_main: false,
    product_variant_id: 12,
  },
  {
    url: "https://example.com/image12-5.jpg",
    is_main: false,
    product_variant_id: 12,
  },

  {
    url: "https://images.unsplash.com/photo-1518362165686-c587a1de1003?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 13,
  },
  {
    url: "https://example.com/image13-2.jpg",
    is_main: false,
    product_variant_id: 13,
  },
  {
    url: "https://example.com/image13-3.jpg",
    is_main: false,
    product_variant_id: 13,
  },
  {
    url: "https://example.com/image13-4.jpg",
    is_main: false,
    product_variant_id: 13,
  },
  {
    url: "https://example.com/image13-5.jpg",
    is_main: false,
    product_variant_id: 13,
  },

  {
    url: "https://images.unsplash.com/photo-1552066344-2464c1135c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 14,
  },
  {
    url: "https://example.com/image14-2.jpg",
    is_main: false,
    product_variant_id: 14,
  },
  {
    url: "https://example.com/image14-3.jpg",
    is_main: false,
    product_variant_id: 14,
  },
  {
    url: "https://example.com/image14-4.jpg",
    is_main: false,
    product_variant_id: 14,
  },
  {
    url: "https://example.com/image14-5.jpg",
    is_main: false,
    product_variant_id: 14,
  },

  {
    url: "https://images.unsplash.com/photo-1558004282-e2b2587e3e47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 15,
  },
  {
    url: "https://example.com/image15-2.jpg",
    is_main: false,
    product_variant_id: 15,
  },
  {
    url: "https://example.com/image15-3.jpg",
    is_main: false,
    product_variant_id: 15,
  },
  {
    url: "https://example.com/image15-4.jpg",
    is_main: false,
    product_variant_id: 15,
  },
  {
    url: "https://example.com/image15-5.jpg",
    is_main: false,
    product_variant_id: 15,
  },

  {
    url: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 16,
  },
  {
    url: "https://example.com/image16-2.jpg",
    is_main: false,
    product_variant_id: 16,
  },
  {
    url: "https://example.com/image16-3.jpg",
    is_main: false,
    product_variant_id: 16,
  },
  {
    url: "https://example.com/image16-4.jpg",
    is_main: false,
    product_variant_id: 16,
  },
  {
    url: "https://example.com/image16-5.jpg",
    is_main: false,
    product_variant_id: 16,
  },

  {
    url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 17,
  },
  {
    url: "https://example.com/image17-2.jpg",
    is_main: false,
    product_variant_id: 17,
  },
  {
    url: "https://example.com/image17-3.jpg",
    is_main: false,
    product_variant_id: 17,
  },
  {
    url: "https://example.com/image17-4.jpg",
    is_main: false,
    product_variant_id: 17,
  },
  {
    url: "https://example.com/image17-5.jpg",
    is_main: false,
    product_variant_id: 17,
  },

  {
    url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 18,
  },
  {
    url: "https://example.com/image18-2.jpg",
    is_main: false,
    product_variant_id: 18,
  },
  {
    url: "https://example.com/image18-3.jpg",
    is_main: false,
    product_variant_id: 18,
  },
  {
    url: "https://example.com/image18-4.jpg",
    is_main: false,
    product_variant_id: 18,
  },
  {
    url: "https://example.com/image18-5.jpg",
    is_main: false,
    product_variant_id: 18,
  },

  {
    url: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 19,
  },
  {
    url: "https://example.com/image19-2.jpg",
    is_main: false,
    product_variant_id: 19,
  },
  {
    url: "https://example.com/image19-3.jpg",
    is_main: false,
    product_variant_id: 19,
  },
  {
    url: "https://example.com/image19-4.jpg",
    is_main: false,
    product_variant_id: 19,
  },
  {
    url: "https://example.com/image19-5.jpg",
    is_main: false,
    product_variant_id: 19,
  },

  {
    url: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 20,
  },
  {
    url: "https://example.com/image20-2.jpg",
    is_main: false,
    product_variant_id: 20,
  },
  {
    url: "https://example.com/image20-3.jpg",
    is_main: false,
    product_variant_id: 20,
  },
  {
    url: "https://example.com/image20-4.jpg",
    is_main: false,
    product_variant_id: 20,
  },
  {
    url: "https://example.com/image20-5.jpg",
    is_main: false,
    product_variant_id: 20,
  },

  {
    url: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_main: true,
    product_variant_id: 21,
  },
  {
    url: "https://example.com/image21-2.jpg",
    is_main: false,
    product_variant_id: 21,
  },
  {
    url: "https://example.com/image21-3.jpg",
    is_main: false,
    product_variant_id: 21,
  },
  {
    url: "https://example.com/image21-4.jpg",
    is_main: false,
    product_variant_id: 21,
  },
  {
    url: "https://example.com/image21-5.jpg",
    is_main: false,
    product_variant_id: 21,
  },
];

module.exports = imageData;
