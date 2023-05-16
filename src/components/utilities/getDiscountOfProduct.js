export const getDiscountOfProduct = (productPrice, originalPrice) => {
    return parseInt(((Number(originalPrice) - Number(productPrice)) / Number(originalPrice)) * 100)
}
