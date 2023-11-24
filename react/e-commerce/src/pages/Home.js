import { RightArrowAlt as rarrow } from "@styled-icons/boxicons-regular/";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Collection } from '../components/Collection.js';
import { New } from '../components/New.js';
import { Sale } from '../components/Sale.js';
import { Sneaker } from '../components/Sneaker.js';

export const Rarrow = styled(rarrow)`
    color: black;
    height:25px;
    width: 25px;
`

class Home extends React.Component {
    render() {
        return <Tag />
    }
}

function Tag() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios
        .get("http://127.0.0.1:3003/home")
        .then((res) => setMyData(res.data))
        .catch((error) => console.log(error));
    }, []);
    return (
        <><main className="l-main">
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__sneaker">
                        <div className="home__shape"></div>
                            <img src="/img/imghome.png" alt="" className="home__img"></img>
                        </div>

                        <div className="home__data">
                            <span className="home__new">New in</span>
                            <h1 className="home__title">YEEZY BOOST <br /> SPLY - 350</h1>
                            <p className="home__description">Explore the new collections of sneakers</p>
                            <a href="/Shop" className="button">Explore now</a>
                        </div>
                    </div>
            </section>
            <section className="featured section" id="featured">
                <h2 className="section-title">
                    FEATURED
                </h2>
                <div>
                    {
                        myData.map((post) => {
                            return (
                                <div className="featured__container bd-grid">
                                    {
                                        post.featured.map(data => {
                                            const {prodName, prodPrice, imagePath, productId, image1, image2, image3, image4} = data;
                                            return <article key={productId}>
                                            <Sale product={{id: productId, img: imagePath, name: prodName, price: prodPrice, image1: image1, image2: image2, image3: image3, image4: image4}}/>
                                            </article>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="collection section">
                <div>
                    {
                        myData.map((post) => {
                            return (
                                <div className="collection__container bd-grid">
                                    {
                                        post.collection.map(data => {
                                            const {prodName, imagePath, id} = data;
                                            return <article key={id}>
                                            <Collection product={{img: imagePath, name: prodName, redirect: '/product'}}/>
                                            </article>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="women section" id="women">
                <h2 className="section-title">WOMEN SNEAKERS</h2>
                <div>
                {
                        myData.map((post) => {
                            return (
                                <div className="women__container bd-grid">
                                    {
                                        post.women.map(data => {
                                            const {prodName, prodPrice, imagePath, productId, image1, image2, image3, image4} = data;
                                            return <article key={productId}>
                                            <Sneaker product={{id: productId, img: imagePath, name: prodName, price: prodPrice, image1: image1, image2: image2, image3: image3, image4: image4}}/>
                                            </article>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="offer section">
                <div>
                {
                        myData.map((post) => {
                            return (
                                <div className="offer__container bd-grid">
                                    {
                                        post.offer.map(data => {
                                            const {imagePath, id} = data;
                                            return <><div className="offer__data" key={id}>
                                            <h3 className="offer__title">50% OFF</h3>
                                            <p className="offer__description">In Adidas Superstar sneakers</p>
                                            <a href="/Shop" className="button">Shop Now</a>
                                        </div>
                                        <img src={imagePath} alt="" className="offer__img"></img></>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="new section" id="new">
                <h2 className="section-title">NEW COLLECTION</h2>
                <div className="new__container bd-grid">
                    <div className="new__mens">
                        <img src='/img/new1.png' alt="" className="new__mens-img"></img>
                        <h3 className="new__title">Mens Shoes</h3>
                        <span className="new__preci">From ₹3179</span>
                        <a href="/Shop" className="button-light">View Collection <Rarrow className='bx button-icon' /></a>
                    </div>
                    {
                        myData.map((post) => {
                            return (
                                <div className="new__sneaker">
                                    {
                                        post.new.map(data => {
                                            const {imagePath, productId, prodPrice, prodName} = data;
                                            return <article key={productId}>
                                            <New product={{img: imagePath, id: productId, price: prodPrice, name: prodName}}/>
                                            </article>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="newsletter section">
                <div className="newsletter__container bd-grid">
                    <div>
                        <h3 className="newsletter__title">Subscribe And Get <br /> 10% OFF </h3>
                        <p className="newsletter__description">Get 10% discount for all products</p>
                    </div>
                    <form action="" className="newsletter__subscribe">
                        <input type="text" placeholder="john.doe@gmail.com" className="newsletter__input"></input>
                        <a href="./index.html" className="button">Subscribe</a>
                    </form>
                </div>
            </section>
        </main> </>
        );
}

export default Home;