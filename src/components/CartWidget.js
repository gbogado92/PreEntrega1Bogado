import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <div className="text-white">
      <BiCart size={32} />
      <span className="badge bg-secondary">3</span>
    </div>
  );
};

export default CartWidget;
