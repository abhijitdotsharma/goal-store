//I will take a product detail prop from Products.jsx and render it
import { useCart } from "../../context/cart-context";
import { getDiscountOfProduct } from "../utilities/getDiscountOfProduct";

const ProductCard = ({ product }) => {
    const { addToCart,addToWishlist } = useCart();

    let discount = getDiscountOfProduct(product.price, product.originalPrice)
    return (
        <>
            <div className="card">
                <div className="card__image">
                    <img src={`${product.photo}`} alt="some pic" />
                    <span className="card__badge">Limited</span>
                </div>
                <div className="card__info">
                    <div className="card__title">
                        <div>
                            <h4 className="card__heading">{product.title}</h4>
                            <small className="card__brand">{product.author}</small>
                            <small className="card__rating">{product.rating}<i className="fal fa-star"></i></small>
                        </div>
                        <i 
                        onClick={() => addToWishlist(product)}
                        className="far fa-heart"
                        ></i>
                    </div>
                    <div className="card__price">
                        <p className="price__present">{product.price}</p>
                        <p className="price__original">{product.originalPrice}</p>
                        <p className="price__discount">{`${discount}%`}</p>
                    </div>
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </>
    )

}

export { ProductCard }