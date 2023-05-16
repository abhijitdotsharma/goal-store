export const getRatedProducts = (products, rating) => {
    //rating 4
    //return product.rating > rating
    if(rating === null) return [...products];

    const rateFilteredProducts = products.filter(product => product.rating >= rating)
    return rateFilteredProducts;
}
