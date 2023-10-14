import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/card.css";
const Card = (curElem) => {
    const { id, desc, name, price, category, slug } = curElem;
    return (
        <NavLink style={{ maxHeight: "300px", width: "220px" }} className='productCardLink' to={`/product/${slug}`}>
            <div className="productCard">
                <div className="productCard-image">
                    <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`} alt={name} />
                </div>
                <div className="productCard-data">
                    <h3>{name}</h3>
                    <p className="card-data-price"> {price}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
