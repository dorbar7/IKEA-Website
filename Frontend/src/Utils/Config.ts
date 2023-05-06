class Config {
    public furnitureUrl = "http://localhost:3001/api/furnishings/";
    public productsUrl = "http://localhost:3001/api/products/";
    public addProductUrl = "http://localhost:3001/api/add-product/";
}

const appConfig = new Config(); // Singleton

export default appConfig;
