import { useCartContext } from "../context/cart_context.js";


export const New = ({product}) =>  {
    const { addToCart } = useCartContext();
    return (
        <div className="new__sneaker-card">
            <img src={product.img} alt="" className="new__sneaker-img"></img>
            <div className="new__sneaker-overlay">
                <a href="" onClick={() => addToCart(product.id, 1, product.name, product.img, product.price)} className="button">Add to Cart </a>
            </div>
        </div>
    )
}