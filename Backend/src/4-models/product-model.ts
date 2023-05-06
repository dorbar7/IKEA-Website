class ProductModel{
    public productId: number;
    public furnitureId:number;
    public name: string;
    public size: string;
    public color:string;
    public price:number;

    public constructor(product:ProductModel){
        this.productId=product.productId
        this.furnitureId=product.furnitureId
        this.name=product.name
        this.size=product.size
        this.color=product.color
        this.price=product.price
       
    }


}

export default ProductModel