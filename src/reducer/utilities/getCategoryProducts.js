export const getCategoryProducts = (products, category) => {
    if(category.length === 0) return products;//no category selected

    //filter the productArray based on the categoryArray
    const filteredCategoryList = products.filter(product => category.includes(product.categoryName))
    return filteredCategoryList;
}

