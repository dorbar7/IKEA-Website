import { useEffect, useState } from "react";
import "./List.css";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import productService from "../../../Services/ProductService";

function List(): JSX.Element {
const [products, setProducts]=useState<ProductModel[]>([])
    

useEffect(()=>{
    productService.getAllPruducts()
    .then(products => setProducts(products))
    .catch(err => alert(err.message))

},[])
return (
        <div className="List">
			<h2>Furniture List</h2>


          {products.map(p =>< ProductCard key={p.productId} product={p}/>)}

          
        </div>
    );
}

export default List;
