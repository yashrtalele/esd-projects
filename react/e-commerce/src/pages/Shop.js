import { RightArrowAlt as rarrow } from "@styled-icons/boxicons-regular/";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Sneaker } from "../components/Sneaker.js";

export const Rarrow = styled(rarrow)`
    color: black;
    height:25px;
    width: 25px;
`

class Shop extends React.Component {
    render () {
        return <Tag />
    }
}

function Tag() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios
        .get("http://127.0.0.1:3003/products")
        .then((res) => setMyData(res.data))
        .catch((error) => console.log(error));
    }, []);
    return (
        <main className="l-main">
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>
            <div className="featured__container bd-grid">
            {
                myData.map((post) => {
                    const {prodName, prodPrice, imagePath, productId, image1, image2, image3, image4} = post;
                    return <article key={productId}>
                            <Sneaker product={{id: productId, img: imagePath, name: prodName, price: prodPrice, image1: image1, image2: image2, image3: image3, image4: image4}}/>
                            </article>
                        })
                        
                    }
                    </div>
            
            <div className="sneaker__pages bd-grid">
                <div>
                    <span className="sneaker__pag">1</span>
                    <span className="sneaker__pag">2</span>
                    <span className="sneaker__pag">3</span>
                    <span className="sneaker__pag">4</span>
                    <span className="sneaker__pag">&#8594;</span>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Shop;