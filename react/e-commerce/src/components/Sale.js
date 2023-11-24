import { RightArrowAlt as rarrow } from "@styled-icons/boxicons-regular/";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Rarrow = styled(rarrow)`
    color: black;
    height:25px;
    width: 25px;
`

export const Sale = ({product}) => {
    return (
        <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src={product.img} alt="" className="sneaker__img"></img>
            <span className="sneaker__name">{product.name}</span>
            <span className="sneaker__preci">₹ {product.price}</span>
            <Link to="/product" state={product} className="button-light">Add to Cart <Rarrow className='bx bx-right-arrow-alt button-icon' /></Link>
        </article>
    )
}