import React from "react";
import { CartItem } from "../components/CartItem.js";
import { useCartContext } from "../context/cart_context.js";

const Cart = () => {
    const { cart } = useCartContext();
    let price = 0;
    console.log("🚀 Cart: ", cart);
    return (
        <main className="l-main">
        <div className="row">
            <div className="column left">
                <div className="cart__container">
                    <section className="cart section">
                        <h1 className="cart__h1">Bag</h1>
                        <div>
                            {
                                cart.map((currElement) => {
                                    price=price+(currElement.price*currElement.amount);
                                    return (
                                        <>
                                        <CartItem id={currElement.id} image={currElement.image} name={currElement.name} amount={currElement.amount} price={currElement.price} desc="Dri-FIT Open-Hem Versatile Shoes"/>;
                                        </>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
            <div className="column right">
                <div className="summary__container">
                    <section className="cart section">
                        <h1 className="summary__h1">Summary</h1>
                            <div className="summary__cont">
                                <div className="row-1">
                                    <div className="column-1 left-1">
                                        <p className="summary__p">Subtotal <i className='bx bxs-help-circle' ></i></p>
                                        <hr className="solid-1"/>
                                        <p className="summary__p">Estimated Delivery & Handling</p>
                                        <hr className="solid-1"/>
                                    </div>
                                    <div className="column-1 right-1">
                                        <span className="summary__span">₹{price}</span>
                                        <hr className="solid-1"/>
                                        <span className="summary__span">₹{price * 0.18}</span>
                                        <hr className="solid-1"/>
                                    </div>
                                </div>
                                <hr className="solid" />
                                <div className="row-1">
                                    <div className="column-1 left-1">
                                        <p className="summary__p">Total</p>
                                        <hr className="solid-1"/>
                                    </div>
                                    <div className="column-1 right-1">
                                        <span className="summary__span">₹{price+price * 0.18}</span>
                                        <hr className="solid-1"/>
                                    </div>
                                </div>
                                <hr className="solid" />
                                
                            </div>
                            <a href="/" className="button-1">Checkout</a>
                    </section>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Cart;