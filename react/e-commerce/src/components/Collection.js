import { RightArrowAlt as rarrow } from "@styled-icons/boxicons-regular/";
import styled from 'styled-components';

export const Rarrow = styled(rarrow)`
    color: black;
    height:25px;
    width: 25px;
`
export const Collection = ({product}) => {
    return (
        <div className="collection__card">
            <div className="collection__data">
                <h3 className="collection__name">{product.name}</h3>
                <p className="collection__description">New collection 2023</p>
                <a href={product.redirect} className="button-light">Buy now <Rarrow className='bx bx-right-arrow-alt button-icon'/></a>
            </div>
            <img src={product.img} alt="" className="collection__img"></img>
        </div>
    );
}