import React from "react";
import Button from "../Button";
//css
import "./MenuItem.css";

function MenuItem(props) {
  return (
    <div className="MenuItem">
      <div className="MenuItem-container">
        <img src={props.img[0].url} alt={props.title} />
        <div className="text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p className="price">R$ {props.price}</p>
        </div>
        <Button>Adicionar</Button>
      </div>
      <hr />
    </div>
  );
}

export default MenuItem;
