const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  console.log(req.query)
  try {
    const products = await Product.find({}).populate("user", "name email");
    res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const getAllFilteredProducts = async (req, res) => {
  try {
    const {
      storage,
      color,
      ram,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      brand,
      limit,
    } = req.query;

    console.log(req.query)

    let query = {};

    // filter logic
    if (category && category.toLocaleLowerCase() !== "all") {
      query.category = category;
    }
    if (brand && brand.toLocaleLowerCase() !== "all") {
      query.brand = { $in: brand.split(",") };
    }
    if (ram && ram.toLocaleLowerCase() !== "all") {
      query.ram = { $in: ram.split(",") };
    }
    if (storage && storage.toLocaleLowerCase() !== "all") {
      query.storage = { $in: storage.split(",") };
    }
    if (color && color.toLocaleLowerCase() !== "all") {
      query.colors = { $in: [color] };
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // sort logic
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // fetch products and apply sorting and limit
    console.log(query)
    let products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);
    1;
    console.log(products)
    res.json({
      status: "success",
      message: "Products fetched successfully",
      data: products,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const getSimilarProducts = async (req, res) => {
  try {
    const { id } = req.params;

    // find the product by id
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    
    const similarProducts = await Product.find({
      _id: { $ne: id }, // Exclude the current product
      category: product.category,
    }).limit(4); // Limit to 4 similar products

    if (similarProducts.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No similar products found",
      });
    }

    res.json({
      status: "success",
      message: "Similar products fetched successfully",
      data: similarProducts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const getBestSellerProducts = async (req, res) => {
  try {
    const bestSellerProducts = await Product.findOne({}).sort({ rating: -1 });

    if (!bestSellerProducts) {
      return res.status(404).json({
        status: "fail",
        message: "No best seller products found",
      });
    }

    res.json({
      status: "success",
      message: "Best seller products fetched successfully",
      data: bestSellerProducts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const getNewArrivalsProducts = async (req, res) => {
  try {
    const newArrivalsProducts = await Product.find({})
      .sort({ createdAt: -1 })
      .limit(8);

    if (!newArrivalsProducts) {
      return res.status(404).json({
        status: "fail",
        message: "No new arrivals products found",
      });
    }

    res.json({
      status: "success",
      message: "New arrivals products fetched successfully",
      data: newArrivalsProducts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      colors,
      ram,
      storage,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      colors,
      ram,
      storage,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      user: req.user._id, // Referencing the user who created the product (admin)
    });

    const savedProduct = await product.save();
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: savedProduct,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      colors,
      ram,
      storage,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      rating,
    } = req.body;

    // find product by id
    const product = await Product.findById(req.params.id);

    if (product) {
      // update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.sku = sku || product.sku;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.colors = colors || product.colors;
      product.ram = ram || product.ram;
      product.storage = storage || product.storage;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.rating = rating || product.rating;

      // save the updated product
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({
        message: "Product removed",
      });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error",
    });
  }
};

module.exports = {
  getAllProducts,
  getAllFilteredProducts,
  getSimilarProducts,
  getBestSellerProducts,
  getNewArrivalsProducts,
  createNewProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
