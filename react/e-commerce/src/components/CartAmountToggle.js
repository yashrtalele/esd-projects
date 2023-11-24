import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <div className="amount-toggle">
            <button onClick={() => setDecrease()}>
            <FaMinus />
            </button>
            <div className="amount-style">{amount}</div>
            <button onClick={() => setIncrease()}>
            <FaPlus />
            </button>
        </div>
    );
};