const imageData = [
  { url: "https://example.com/image1-1.jpg", is_main: true, product_id: 1 },
  { url: "https://example.com/image1-2.jpg", is_main: false, product_id: 1 },
  { url: "https://example.com/image1-3.jpg", is_main: false, product_id: 1 },
  { url: "https://example.com/image1-4.jpg", is_main: false, product_id: 1 },
  { url: "https://example.com/image1-5.jpg", is_main: false, product_id: 1 },

  { url: "https://example.com/image2-1.jpg", is_main: true, product_id: 2 },
  { url: "https://example.com/image2-2.jpg", is_main: false, product_id: 2 },
  { url: "https://example.com/image2-3.jpg", is_main: false, product_id: 2 },
  { url: "https://example.com/image2-4.jpg", is_main: false, product_id: 2 },
  { url: "https://example.com/image2-5.jpg", is_main: false, product_id: 2 },

  { url: "https://example.com/image3-1.jpg", is_main: true, product_id: 3 },
  { url: "https://example.com/image3-2.jpg", is_main: false, product_id: 3 },
  { url: "https://example.com/image3-3.jpg", is_main: false, product_id: 3 },
  { url: "https://example.com/image3-4.jpg", is_main: false, product_id: 3 },
  { url: "https://example.com/image3-5.jpg", is_main: false, product_id: 3 },

  { url: "https://example.com/image4-1.jpg", is_main: true, product_id: 4 },
  { url: "https://example.com/image4-2.jpg", is_main: false, product_id: 4 },
  { url: "https://example.com/image4-3.jpg", is_main: false, product_id: 4 },
  { url: "https://example.com/image4-4.jpg", is_main: false, product_id: 4 },
  { url: "https://example.com/image4-5.jpg", is_main: false, product_id: 4 },

  { url: "https://example.com/image5-1.jpg", is_main: true, product_id: 5 },
  { url: "https://example.com/image5-2.jpg", is_main: false, product_id: 5 },
  { url: "https://example.com/image5-3.jpg", is_main: false, product_id: 5 },
  { url: "https://example.com/image5-4.jpg", is_main: false, product_id: 5 },
  { url: "https://example.com/image5-5.jpg", is_main: false, product_id: 5 },

  { url: "https://example.com/image6-1.jpg", is_main: true, product_id: 6 },
  { url: "https://example.com/image6-2.jpg", is_main: false, product_id: 6 },
  { url: "https://example.com/image6-3.jpg", is_main: false, product_id: 6 },
  { url: "https://example.com/image6-4.jpg", is_main: false, product_id: 6 },
  { url: "https://example.com/image6-5.jpg", is_main: false, product_id: 6 },

  { url: "https://example.com/image7-1.jpg", is_main: true, product_id: 7 },
  { url: "https://example.com/image7-2.jpg", is_main: false, product_id: 7 },
  { url: "https://example.com/image7-3.jpg", is_main: false, product_id: 7 },
  { url: "https://example.com/image7-4.jpg", is_main: false, product_id: 7 },
  { url: "https://example.com/image7-5.jpg", is_main: false, product_id: 7 },

  { url: "https://example.com/image8-1.jpg", is_main: true, product_id: 8 },
  { url: "https://example.com/image8-2.jpg", is_main: false, product_id: 8 },
  { url: "https://example.com/image8-3.jpg", is_main: false, product_id: 8 },
  { url: "https://example.com/image8-4.jpg", is_main: false, product_id: 8 },
  { url: "https://example.com/image8-5.jpg", is_main: false, product_id: 8 },

  { url: "https://example.com/image9-1.jpg", is_main: true, product_id: 9 },
  { url: "https://example.com/image9-2.jpg", is_main: false, product_id: 9 },
  { url: "https://example.com/image9-3.jpg", is_main: false, product_id: 9 },
  { url: "https://example.com/image9-4.jpg", is_main: false, product_id: 9 },
  { url: "https://example.com/image9-5.jpg", is_main: false, product_id: 9 },

  { url: "https://example.com/image10-1.jpg", is_main: true, product_id: 10 },
  { url: "https://example.com/image10-2.jpg", is_main: false, product_id: 10 },
  { url: "https://example.com/image10-3.jpg", is_main: false, product_id: 10 },
  { url: "https://example.com/image10-4.jpg", is_main: false, product_id: 10 },
  { url: "https://example.com/image10-5.jpg", is_main: false, product_id: 10 },

  { url: "https://example.com/image11-1.jpg", is_main: true, product_id: 11 },
  { url: "https://example.com/image11-2.jpg", is_main: false, product_id: 11 },
  { url: "https://example.com/image11-3.jpg", is_main: false, product_id: 11 },
  { url: "https://example.com/image11-4.jpg", is_main: false, product_id: 11 },
  { url: "https://example.com/image11-5.jpg", is_main: false, product_id: 11 },

  { url: "https://example.com/image12-1.jpg", is_main: true, product_id: 12 },
  { url: "https://example.com/image12-2.jpg", is_main: false, product_id: 12 },
  { url: "https://example.com/image12-3.jpg", is_main: false, product_id: 12 },
  { url: "https://example.com/image12-4.jpg", is_main: false, product_id: 12 },
  { url: "https://example.com/image12-5.jpg", is_main: false, product_id: 12 },

  { url: "https://example.com/image13-1.jpg", is_main: true, product_id: 13 },
  { url: "https://example.com/image13-2.jpg", is_main: false, product_id: 13 },
  { url: "https://example.com/image13-3.jpg", is_main: false, product_id: 13 },
  { url: "https://example.com/image13-4.jpg", is_main: false, product_id: 13 },
  { url: "https://example.com/image13-5.jpg", is_main: false, product_id: 13 },

  { url: "https://example.com/image14-1.jpg", is_main: true, product_id: 14 },
  { url: "https://example.com/image14-2.jpg", is_main: false, product_id: 14 },
  { url: "https://example.com/image14-3.jpg", is_main: false, product_id: 14 },
  { url: "https://example.com/image14-4.jpg", is_main: false, product_id: 14 },
  { url: "https://example.com/image14-5.jpg", is_main: false, product_id: 14 },

  { url: "https://example.com/image15-1.jpg", is_main: true, product_id: 15 },
  { url: "https://example.com/image15-2.jpg", is_main: false, product_id: 15 },
  { url: "https://example.com/image15-3.jpg", is_main: false, product_id: 15 },
  { url: "https://example.com/image15-4.jpg", is_main: false, product_id: 15 },
  { url: "https://example.com/image15-5.jpg", is_main: false, product_id: 15 },
];

module.exports = imageData;
