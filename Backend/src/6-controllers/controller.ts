import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import ProductModel from "../4-models/product-model";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/furnishings
router.get("/furnishings", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const furnishings= await logic.getAllFurniture()
     response.json(furnishings)
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/add-product
router.post("/add-product", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const product= new ProductModel(request.body)
     const addProduct = await logic.addProduct(product) 
     response.status(201).json(addProduct)
    }
    catch (err: any) {
        next(err);
    }
});
// GET http://localhost:3001/api/products
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const products= await logic.getAllPruducts()
     response.json(products)
    }
    catch (err: any) {
        next(err);
    }
});

export default router;