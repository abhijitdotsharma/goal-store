import WishlistCard from "./WishlistCard"

export default function Wishlists({wishlist}) {

    return(
        <div className="wishlist-cards">
            {wishlist && wishlist.map(product => <WishlistCard product={product}/>)}
        </div>
    )
}