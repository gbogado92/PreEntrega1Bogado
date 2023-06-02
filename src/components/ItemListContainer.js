import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
