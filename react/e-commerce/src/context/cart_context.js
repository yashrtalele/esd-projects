import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";
const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("shoesCart");
    if (localCartData.length === 0) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 0,
};

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, productName, productImage, productPrice) => {
        dispatch({type: "ADD_TO_CART", payload: {id, amount, productName, productImage, productPrice}});
    };

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };
    
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id });
    };

    const removeItem = (id) => {
        // console.log("🚀 id : ",id);
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("shoesCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease
    }}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
