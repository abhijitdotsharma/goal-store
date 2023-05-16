export const getFinalFilteredProducts = (products, sortBy) => {
    if(sortBy === "HIGH_TO_LOW") return [...products].sort((productA, productB) => productB.price - productA.price)
    if(sortBy === "LOW_TO_HIGH") return [...products].sort((productA, productB) => productA.price - productB.price)
    return [...products];
}