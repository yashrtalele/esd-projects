const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART") {
        let {id, amount, productName, productImage, productPrice} = action.payload;
        let existingProduct = state.cart.find(
            (curItem) => curItem.id == id
        );

        if(existingProduct) {
            let updatedProduct = state.cart.map((curElement) => {
                if(curElement.id == id) {
                    let newAmount = curElement.amount + amount;
                    return {
                        ...curElement,
                        amount: newAmount,
                    };
                } else {
                    return curElement;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            }
        } else {
            let cartProduct;
            cartProduct = {
                id: id,
                name: productName,
                image: productImage,
                price: productPrice,
                amount,
            };
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;
        
                if (decAmount <= 1) {
                decAmount = 1;
                }
        
                return {
                ...curElem,
                amount: decAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct };
    }
    
    if (action.type === "SET_INCREASE") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let incAmount = curElem.amount + 1;

                return {
                ...curElem,
                amount: incAmount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct };
    }

    if(action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );
        console.log(updatedCart);
        return {
            ...state,
            cart: updatedCart,
        }
    }
    return state;
};

export default cartReducer;
