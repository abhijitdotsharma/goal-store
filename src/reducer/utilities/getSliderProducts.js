export const getSliderProducts = (products, sliderValue) => {
    if(sliderValue === 5000 || sliderValue === "CLEAR SLIDER") return [...products]
    //return products upto sliderValue i.e 0-sliderValue
    const sliderFilteredProducts = products.filter(product => Number(product.price) < Number(sliderValue))
    return sliderFilteredProducts;
}
