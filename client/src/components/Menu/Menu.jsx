import React from "react";
import MenuItem from "../MenuItem";
import axios from "axios";
//css
import "./Menu.css";

// this let is created outside the function cause I don't want it to be rewritten every time the component is rendered
let original = [];

function Menu(props) {
  const [itens, setItens] = React.useState([]);

  // function that pulls the data from the server
  const loadItens = async () => {
    // get the data from the server
    const res = await axios.get("http://localhost:3001/api/menuitens");
    // makes the let original be equals to the database
    original = res.data;
    // set itens equals to the database
    setItens(res.data);
  };

  //it will call loadItens when the page is loaded and not when the component is rerendered
  React.useEffect(() => {
    loadItens();
  }, []);

  // the function that deals with the search bar
  const handleChange = (e) => {
    const written = e.target.value;
    // thats why I use the let original, so I can change "itens" and don't lose what I have in the database
    const newItens = original.filter((element) => {
      // it will only return true if what I wrote in the search bar is equals to some substring os the item name
      // I use the toLowerCase() function to make the search work with both upper and lower case
      return element.name.toLowerCase().includes(written.toLowerCase());
    });
    setItens(newItens);
  };

  return (
    <main className="Menu">
      <div className="menu-container">
        <div className="title-search">
          <h1>Cardápio</h1>
          <input className="search" type="text" onChange={handleChange} />
        </div>
        {itens.map((item) => {
          return (
            <MenuItem
              key={item._id}
              title={item.name}
              description={item.description}
              price={item.price}
              img={item.image}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Menu;
