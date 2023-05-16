import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        (async () => {
            const {data} = await axios.get("/api/products/");
            const resProducts = data.products;
            setProducts(resProducts);
        })();
    }, [])

    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export {ProductProvider, useProduct};
