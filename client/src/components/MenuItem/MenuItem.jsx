import React from "react";
import Button from "../Button"
//css
import "./MenuItem.css";

function MenuItem(props){
    return(
        <div>
            <img src="{props.img}" alt=""/>
            <div class="text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p class="price">R$ {props.price}</p>
            </div>
            <Button>Adicionar</Button>
        </div>
    );
}

export default MenuItem;