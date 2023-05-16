import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        cartCount: 0,
        cartItems: [],
        wishlist: [],
    });

    const encodedToken = localStorage.getItem("token");

    //get cart from server on page load
    useEffect(() => {
        (async function fetchCartFromServer(){
            try{
                const response = await axios.get(`/api/user/cart`, {
                    headers: {
                        authorization: encodedToken
                    },
                });
    
                console.log("cartFromServer: ", response.data.cart.length)
    
                const cartFromServer = response.data.cart;
                setCart(prev => {
                    return {
                        ...prev,
                        cartCount: prev.cartCount + cartFromServer.length,
                        cartItems: [...prev.cartItems, ...cartFromServer] //cartFromServer is an array, so spread 
                    }
                })
            }catch(error){
                console.log("err ", error)
            }
        })();

    }, [])

    
    

    function addToCart(product) {
        //if product.id not on cart.cartItems, add it 
        //else update the product's cartCount
        setCart(prev => {
            const found = prev.cartItems.some(itemObj => itemObj.id === product.id) //product in cart, increase productCount and cartCount

            //new product addition
            if (!found) {
                return {
                    ...prev,
                    cartCount: prev.cartCount + 1,
                    cartItems: [...prev.cartItems, { ...product, productCount: 1 }]
                }
                //put everything from product to cart.cartItems and add productCount: 1
            }

            //product already in cart, increase cartCount and productCount
            return {
                ...prev,
                cartCount: prev.cartCount + 1,
                cartItems: [
                    ...prev.cartItems.map((itemObj) => {
                        //increase productCount of id===product.id
                        if (itemObj.id === product.id) return { ...itemObj, productCount: itemObj.productCount + 1 }
                        //return other cartItem objects as they were, similar to ... since map returns a copy
                        return itemObj;
                    })]
            }

        })
    }

    //remove an item from cart.cartItems based on its id
    function removeFromCart(productId) {
        setCart(prev => {
            //find the item to remove i.e cartItems.productObj.id
            //return updated cartItems, with all except productId -- using filter        

            //productCount of productId object -> to decrease cartCount
            let productToBeRemoved = prev.cartItems.find(productObj => productObj.id === productId)
            return {
                ...prev,
                cartCount: prev.cartCount - productToBeRemoved.productCount,
                cartItems: [
                    ...prev.cartItems.filter(productObj => productObj.id !== productId)
                ]

            }
        })

    }

    function decreaseProductCountInCart(productId) {
        //locate the product, find productCount, decrease by 1



        setCart(prev => {
            //map the cartItems objects, change productCount of productId object
            return {
                ...prev,
                cartCount: prev.cartCount - 1, //cartCount - will decrease on each function call
                cartItems: [
                    ...prev.cartItems.map(productObj => {
                        if (productObj.id === productId) {
                            return { ...productObj, productCount: productObj.productCount - 1 }
                        }
                        return productObj;
                    })
                ]
            }
        })
    }

    function clearCart() {
        setCart(prev => ({ ...prev, cartCount: 0, cartItems: [] }))
    }

    function addToWishlist(product) {
        setCart(prev => {

            //only add if product not on wishlist, found - true if product already exists
            const found = prev.wishlist.some(productObj => productObj.id === product.id)

            //new product addition, add to wishlist
            if(!found){
                return {
                    ...prev,
                    wishlist: [...prev.wishlist, {...product}]
                }
            }

            //product already on wishlist
            return prev;
        })
    }

    function removeFromWishlist(productId){
        //filter and remove the product in wishlist, return the updated array
        setCart(prev => {
            return {
                ...prev,
                wishlist: [
                    ...prev.wishlist.filter(product => product.id !== productId)
                ]
            }
        })
    }

    return (
        <CartContext.Provider value={{ addToCart, cart, clearCart, removeFromCart, decreaseProductCountInCart, addToWishlist, removeFromWishlist}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };