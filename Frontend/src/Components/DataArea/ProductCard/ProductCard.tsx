import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";

interface ProductCardProps {
	product: ProductModel

}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
            <div className="Container">
                <span>type:{props.product.furnitureName}</span>
			<h2> Name: {props.product.name}</h2>
            <br />
            <span>Size: {props.product.size}</span>
            <br />
            <span>Color: {props.product.color}</span>
             <br />
             <span>Price: {props.product.price}</span>
            </div>
        </div>
    );
}

export default ProductCard;
