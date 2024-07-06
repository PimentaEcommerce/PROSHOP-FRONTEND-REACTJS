class ProductModel {
  constructor(
    id,
    brand,
    category,
    countInStock,
    description,
    image,
    name,
    numReviews,
    price,
    rating
  ) {
    this._id = id;
    this.brand = brand;
    this.category = category;
    this.countInStock = countInStock;
    this.description = description;
    this.image = image;
    this.name = name;
    this.numReviews = numReviews;
    this.price = price;
    this.rating = rating;
  }
}

export default ProductModel;
