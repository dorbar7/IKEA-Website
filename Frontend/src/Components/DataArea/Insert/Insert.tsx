import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import "./Insert.css";
import productService from "../../../Services/ProductService";
import { send } from "process";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Insert(): JSX.Element {
  
  	
    const [products, setProducts]=useState<ProductModel[]>([])
    
    const {register,handleSubmit} =useForm<ProductModel>()
   
    const nevigate= useNavigate()
    useEffect(()=>{
        productService.getAllPruducts()
        .then(products => setProducts(products))
        .catch(err => alert(err.message))
    
    },[])


    async function send(product:ProductModel) {
        try{
            await productService.addProduct(product)
            alert("Product has been added !")
           
        }
        catch(err:any){
            alert(err.message)
        }
    }
    return (
        <div className="Insert">

          <form onSubmit={handleSubmit(send)}>
            
          <label>Taype:</label>
            <input type="text" {...register("furnitureName")} required/>

            <label>Name:</label>
            <input type="text" {...register("name")} required/>

            <label>Size:</label>
            <input type="text" {...register("size")} required min="0"/>
            
            <label>Color:</label>
            <input type="text" {...register("color")}required/>

            <label>Price:</label>
            <input type="text" {...register("price")}required min="0" max="1000"/>

            <button>Add</button>
          </form>

        </div>
    );
}

export default Insert;
