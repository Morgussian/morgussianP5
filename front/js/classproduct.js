//représentation d'un produit
class Product {
    constructor(jsonProduct){
        this.colors = jsonProduct.colors;
        this._id = jsonProduct._id;
        this.name = jsonProduct.name;
        this.price = jsonProduct.price;
        this.imageUrl = jsonProduct.imageUrl;
        this.description = jsonProduct.description;
        this.altTxt = jsonProduct.altTxt;
    }
  };