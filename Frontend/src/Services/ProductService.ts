import axios from "axios";
import FurnitureModel from "../Models/FurnitureModel";
import appConfig from "../Utils/Config";
import ProductModel from '../Models/ProductModel';

class ProductService {
    public async getAllFurniture(): Promise<FurnitureModel[]> {
     
      const response = await axios.get<FurnitureModel[]>(appConfig.furnitureUrl)
      const furniture= response.data
      return furniture
   }

 public async getAllPruducts(): Promise<ProductModel[]> {
    const response= await axios.get<ProductModel[]>(appConfig.productsUrl)
    const products = response.data
    return products
 }
   
   public async addProduct(product:ProductModel): Promise<void> {
  await axios.post<ProductModel>(appConfig.addProductUrl,product)
   }
}

const productService = new ProductService();

export default productService;