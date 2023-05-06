class ProductModel{
    public productId: number;
    public furnitureId:number;
    public name: string;
    public size: string;
    public color:string;
    public price:number;

    //Extra field due server JOIN
    public furnitureName:string;


}

export default ProductModel