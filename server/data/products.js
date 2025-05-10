// product.js:

const products = [
  {
    name: "iPhone 16",
    description:
      "Enjoy spectacular media and photography power with the Apple iPhone 16. The new redesigned rear camera looks sleek and stylish at the same time. Ceramic shield glass on the front which keeps the great vivid display safe from sudden scratches. Go swimming without any worries about water harm, with reliable IP rating. Comes with a fabulous viewing angle from the large display for a more immersive experience. Jump to greater gameplay and run regular apps super smooth with the A18's  bionic chipset with greater processing power. Gives you greater graphical performance while editing your vlog and tiktok videos with the built-in Apple GPU. Incredible sharpness and colors from your photos with the reliable dual camera lens. Download and upload your videos faster with the quick Wi-Fi capability. Gives you a day's power back from the dependable battery on-board.",
    price: 99500,
    discountPrice: 0,
    countInStock: 20,
    sku: "apple-iphone-16",
    category: "apple",
    brand: "apple",
    colors: ["Blue", "Pink", "Black"],
    ram: ["4GB", "6GB", "8GB"],
    storage: ["64GB", "128GB", "256GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746892010/iphone16.1_ngdmdu.jpg",
        altText: "iPhone 16 Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746892010/iphone16.2_lxhkcc.jpg",
        altText: "iPhone 16 Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Galaxy S24 FE 5G",
    description:
      "Introducing the Samsung Galaxy S24 FE 5G, the ultimate budget flagship that redefines value without compromise. With Galaxy AI at your fingertips, unleash endless creativity, capturing stunning moments effortlessly. Its stylish design combines sleek aesthetics with exceptional durability, ensuring it stands the test of time. The outstanding camera, enhanced by Galaxy AI, transforms ordinary shots into breathtaking masterpieces, eliminating blemishes and imperfections. Plus, with long-lasting battery life and remarkable performance, the Galaxy S24 FE 5G is your perfect companion for every adventure. Experience innovation and style like never before.",
    price: 55000,
    discountPrice: 0,
    countInStock: 15,
    sku: "samsung-galaxy-s24-fe-5g",
    category: "samsung",
    brand: "samsung",
    colors: ["Black", "White", "Green"],
    ram: ["6GB", "8GB"],
    storage: ["128GB", "256GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746893122/galaxys24.1_nhicwr.jpg",
        altText: "Galaxy S24 FE Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746893122/galaxys24.2_ejb0sg.jpg",
        altText: "Galaxy S24 FE Back View",
      },
    ],
    rating: 4.7,
    numReviews: 8,
  },
  {
    name: "OnePlus 12 Pro",
    description:
      "Experience lightning-fast performance with the OnePlus 12 Pro. Equipped with the latest Snapdragon 8 Gen 2 processor, it ensures seamless multitasking and gaming. The 6.7-inch Fluid AMOLED display offers vibrant visuals, while the 5000mAh battery keeps you powered throughout the day. Capture stunning photos with the triple-camera setup and enjoy ultra-fast charging with Warp Charge 80W.",
    price: 75000,
    discountPrice: 70000,
    countInStock: 25,
    sku: "oneplus-12-pro",
    category: "oneplus",
    brand: "oneplus",
    colors: ["Black", "Silver"],
    ram: ["8GB", "12GB"],
    storage: ["128GB", "256GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746900673/OnePlus-12.1_mqybvr.jpg",
        altText: "OnePlus 12 Pro Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746900673/OnePlus-12.2_apvuy3.jpg",
        altText: "OnePlus 12 Pro Back View",
      },
    ],
    rating: 4.6,
    numReviews: 10,
  },
  {
    name: "Google Pixel 8",
    description:
      "The Google Pixel 8 offers a pure Android experience with the latest features. Its Tensor G3 chip ensures smooth performance, and the 6.2-inch OLED display provides crisp visuals. The dual-camera system captures detailed photos, and the device boasts excellent battery life with fast charging capabilities.",
    price: 68000,
    discountPrice: 65000,
    countInStock: 30,
    sku: "google-pixel-8",
    category: "google",
    brand: "google",
    colors: ["Black", "White", "Coral"],
    ram: ["8GB"],
    storage: ["128GB", "256GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746900773/Pixel-8.1_nlss9f.jpg",
        altText: "Google Pixel 8 Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746900773/Pixel-8.2_hexcic.jpg",
        altText: "Google Pixel 8 Back View",
      },
    ],
    rating: 4.4,
    numReviews: 15,
  },
  {
    name: "Xiaomi Mi 14",
    description:
      "Xiaomi Mi 14 combines performance and affordability. Powered by the Snapdragon 8 Gen 2 processor, it features a 6.36-inch AMOLED display with a 120Hz refresh rate. The triple-camera setup delivers versatile photography options, and the 4500mAh battery supports 67W fast charging.",
    price: 60000,
    discountPrice: 58000,
    countInStock: 40,
    sku: "xiaomi-mi-14",
    category: "xiaomi",
    brand: "xiaomi",
    colors: ["Black", "Blue", "Green"],
    ram: ["8GB", "12GB"],
    storage: ["128GB", "256GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746900892/mi14.1_tqlu6u.jpg",
        altText: "Xiaomi Mi 14 Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746900893/mi14.2_nr2c6f.jpg",
        altText: "Xiaomi Mi 14 Back View",
      },
    ],
    rating: 4.3,
    numReviews: 20,
  },
  {
    name: "Huawei P60 Pro",
    description:
      "Huawei P60 Pro offers top-tier photography capabilities with its quad-camera system. The 6.6-inch OLED display ensures vibrant visuals, and the Kirin 9000 processor delivers smooth performance. With a 4500mAh battery and 66W fast charging, stay connected all day.",
    price: 85000,
    discountPrice: 82000,
    countInStock: 18,
    sku: "huawei-p60-pro",
    category: "huawei",
    brand: "huawei",
    colors: ["Black", "Silver"],
    ram: ["8GB", "12GB"],
    storage: ["256GB", "512GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746901071/HUAWEI-P60-Pro.1_klmfze.jpg",
        altText: "Huawei P60 Pro Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746901071/HUAWEI-P60-Pro.2_mfwibz.jpg",
        altText: "Huawei P60 Pro Back View",
      },
    ],
    rating: 4.5,
    numReviews: 9,
  },
  {
    name: "Motorola Edge 40 Pro",
    description:
      "Motorola Edge 40 Pro combines sleek design with powerful performance. Featuring a 6.7-inch OLED display with a 165Hz refresh rate, Snapdragon 8 Gen 2 processor, and a 4600mAh battery with 125W fast charging, it's built for speed.",
    price: 70000,
    discountPrice: 68000,
    countInStock: 20,
    sku: "motorola-edge-40-pro",
    category: "motorola",
    brand: "motorola",
    colors: ["Black", "Blue"],
    ram: ["12GB"],
    storage: ["256GB"],
    images: [
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746901220/Motorola-Edge-40-.1_cxkucm.jpg",
        altText: "Motorola Edge 40 Pro Front View",
      },
      {
        url: "https://res.cloudinary.com/diyh9o7eo/image/upload/v1746901222/Motorola-Edge-40-.2_yjh6xj.jpg",
        altText: "Motorola Edge 40 Pro Back View",
      },
    ],
    rating: 4.4,
    numReviews: 11,
  },
];

module.exports = products;