const imageData = [
  {
    url: "https://example.com/image1-1.jpg",
    is_main: true,
    product_variant_id: 1,
  },
  {
    url: "https://example.com/image1-2.jpg",
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
    url: "https://example.com/image2-1.jpg",
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
    url: "https://example.com/image3-1.jpg",
    is_main: true,
    product_variant_id: 3,
  },
  {
    url: "https://example.com/image3-2.jpg",
    is_main: false,
    product_variant_id: 3,
  },
  {
    url: "https://example.com/image3-3.jpg",
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
    url: "https://example.com/image4-1.jpg",
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
    url: "https://example.com/image5-1.jpg",
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
    url: "https://example.com/image6-1.jpg",
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
    url: "https://example.com/image7-1.jpg",
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
    url: "https://example.com/image8-1.jpg",
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
    url: "https://example.com/image9-1.jpg",
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
    url: "https://example.com/image10-1.jpg",
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
    url: "https://example.com/image11-1.jpg",
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
    url: "https://example.com/image12-1.jpg",
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
    url: "https://example.com/image13-1.jpg",
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
    url: "https://example.com/image14-1.jpg",
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
    url: "https://example.com/image15-1.jpg",
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
    url: "https://example.com/image16-1.jpg",
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
    url: "https://example.com/image17-1.jpg",
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
    url: "https://example.com/image18-1.jpg",
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
    url: "https://example.com/image19-1.jpg",
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
    url: "https://example.com/image20-1.jpg",
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
    url: "https://example.com/image21-1.jpg",
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
