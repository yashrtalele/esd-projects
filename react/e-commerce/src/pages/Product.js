import { Star as EmptyStar } from "@styled-icons/boxicons-regular/";
import { Star, StarHalf } from "@styled-icons/boxicons-solid/";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import { Slider } from '../components/Slides.js';
import { useCartContext } from "../context/cart_context.js";

export const BStarOutline = styled(EmptyStar)`
    color: black;
    height:20px;
    width: 20px;
`

export const BStar = styled(Star)`
    color: black;
    height:20px;
    width: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const BStarHalf = styled(StarHalf)`
    color: black;
    height:20px;
    width: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Product = (props) => {
    const { addToCart } = useCartContext();
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const slides=[
        {
            "image": propsData.image1
        },
        {
            "image": propsData.image2
        },
        {
            "image": propsData.image3
        },
        {
            "image": propsData.image4
        }
    ]
    return (
        <main className="l-main">
            <section id="product-page">
                <div className="product-details">
                    <div className="product-img">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <Slider slides={slides}/>
                                </div>
                            </div>
                        <div className="slider-btns">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                    </div>
                    <div className="product-text">
                        <span className="product-category">Women's Shoes</span>
                        <h3>{propsData.name}</h3>
                        <span className="product-price">₹ {propsData.price}</span>
                        <p>Ready to take your style up a notch? We've re-imagined an icon of Air to bring you the perfect mix of throwback details and futuristic design. Sawtooth edging around the outsole is combined with smooth leather and partially floating Swoosh logos to deliver skilfully crafted luxury.
                            <br/>
                            Plush ankle padding and Max Air cushioning bring you first-className comfort. With a design that's sporty, playful and oh-so comfortable, these kicks are all about stepping into the future.
                        </p>
                        <div className="product-size-container">
                            <strong>Select Size:-</strong>
                            <div className="product-size">
                                <input type="checkbox" className="s-checkbox" id="s-7" />
                                <label for="s-7" className="s-label">7</label>
                                <input type="checkbox" className="s-checkbox" id="s-8" />
                                <label for="s-8" className="s-label">8</label>
                                <input type="checkbox" className="s-checkbox" id="s-9" />
                                <label for="s-9" className="s-label">9</label>
                                <input type="checkbox" className="s-checkbox" id="s-10" />
                                <label for="s-10" className="s-label">10</label>
                            </div>
                        </div>
            
                        <div className="product-button">
                            <button className="add-bag-btn" onClick={() => addToCart(propsData.id, 1, propsData.name, propsData.image1, propsData.price)}>Add To Bag</button>
                            <a href="/" className="add-wishlist-btn">Add To Wishlist</a>
                        </div>
                        
                        <div className="product__review">
                            <h4 className="product__h3">Reviews (2)</h4>
                            <div className="row">
                                <div className="column">
                                    <BStarOutline style={{marginBottom: '20px'}} ></BStarOutline>
                                    <BStarOutline style={{marginBottom: '20px'}} ></BStarOutline>
                                    <BStarOutline style={{marginBottom: '20px'}} ></BStarOutline>
                                    <BStarOutline style={{marginBottom: '20px'}} ></BStarOutline>
                                    <BStarOutline style={{marginBottom: '20px'}} ></BStarOutline>
                                </div>
                            </div>
                            <input style={{marginTop: '3px', marginBottom: '0px', fontWeight: 'normal'}} type="text" name="" id="" placeholder="Write a review" className="review__input" />
                            <div className="review__user">
                                <p style={{marginBottom: '5px'}}>Comfy and very, very flattering.</p>
                                <div className="row">
                                    <div className="column">
                                        <BStar ></BStar>
                                        <BStar ></BStar>
                                        <BStar ></BStar>
                                        <BStarHalf ></BStarHalf>
                                        <BStarOutline ></BStarOutline>
                                    </div>
                                </div>
                                <p style={{marginTop: '10px', marginBottom: '1px', fontWeight: 'normal'}} className="review__product">Tianyuan213306211 - 31 Oct 2023</p>
                                <p style={{marginTop: '10px', marginBottom: '30px', fontWeight: 'normal'}}>
                                    Extremely flattering and comfortable. I was on the fence because I saw the one-star review here, but have bought it nonetheless.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <a href="/" className="help-btn">Need Any Help?</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Product;