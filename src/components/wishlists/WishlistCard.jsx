import { useCart } from "../../context/cart-context";
import { getDiscountOfProduct } from "../utilities/getDiscountOfProduct";

export default function WishlistCard({product}) {

    const {addToCart, removeFromWishlist} = useCart();

    console.log("wishlist - ", product)

   

    let discount = getDiscountOfProduct(product.price, product.originalPrice)

    return (
        <div className="card">
            <div className="card-image">
                <img
                    src={`${product.photo}`}
                    alt={`${product.title}`}
                />
                <span className="card-badge">Limited</span>
                <i 
                className="card-remove fal fa-times-circle fa-2x"
                onClick={() => removeFromWishlist(product.id)}
                ></i>
            </div>

            <div className="card-info">
                <div className="card-title">
                    <div>
                        <h3>{product.title}</h3>
                        <small>{product.author}</small>
                    </div>
                    <i className="far fa-heart"></i>
                </div>
                <div className="card-price">
                    <p className="disc-price">{product.price}</p>
                    <p className="og-price">{product.originalPrice}</p>
                    <p className="disc-percent">{`${discount}% off`}</p>
                </div>
            </div>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}