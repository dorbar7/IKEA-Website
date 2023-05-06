import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import FurnitureModel from "../4-models/furniture-model";
import ProductModel from "../4-models/product-model";

async function getAllFurniture(): Promise<FurnitureModel[]> {
    const sql= "SELECT * FROM furnishings"
    const furnishings= await dal.execute(sql)
    return furnishings
    
}

async function addProduct(product:ProductModel): Promise<ProductModel> {
    const sql=`
    INSERT INTO products VALUES(
        DEFAULT,
        '${product.furnitureId}',
        '${product.name}',
        '${product.size}',
        '${product.color}',
        '${product.price}'
        )`
        const info: OkPacket = await dal.execute(sql)
        product.furnitureId = info.insertId

        return product
}
async function getAllPruducts(): Promise<ProductModel[]> {
    const sql= "SELECT * FROM products"
    const products= await dal.execute(sql)
    return products
    
}


export default {
    getAllFurniture,
    addProduct,
    getAllPruducts
};
