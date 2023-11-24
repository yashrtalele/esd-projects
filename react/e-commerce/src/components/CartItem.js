import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context.js";
import { CartAmountToggle } from "./CartAmountToggle.js";
export const CartItem = ({id, name, desc, image, price, amount}) => {
    console.log(" 🚀  id : ", id);
    const { removeItem,  setDecrease, setIncrease } = useCartContext();
    return (
    <table>
    <tr>
        <td>
    <div className="cart__info">
        <img src={image} alt="" className="cart__img"/>
        <div>
            <p className="cart__p">{name}</p>
            <p className="cart__d">{desc}</p>
            <p className="cart__d">Price: ₹{price}</p>
            <div className="cart__p1">
                <CartAmountToggle
                    amount={amount}
                    setDecrease={() => setDecrease(id)}
                    setIncrease={() => setIncrease(id)}
                />
            </div>
            <div className="cart__p2">
                <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
            </div>
            <br/>
            <a href="/"><i className='bx bx-trash'></i></a>
        </div>
    </div>
    </td></tr></table>
    );
}