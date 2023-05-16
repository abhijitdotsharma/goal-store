import "./wishlist-page.css"
import { NavigationTop, Wishlists } from "../../components"
import { useCart } from "../../context/cart-context"

export default function WishlistPage() {
    //wishlist uses <ProductCard/> component since all the details are almost similar to productpage
    const {cart} = useCart();

    return (
        <div>
            <NavigationTop />
            <section className="wishlist-wrapper">
                <h2>My <span style={{ color: "#9760d6" }}>Wishlist</span> ::: </h2>
                <Wishlists wishlist={cart.wishlist}/>
            </section>
        </div>
    )
}

