import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import "./index.css"

import {
  Header,
  Button,
  MenuItem,
  Footer
} from './components';

import img1 from "./img/hot-dog1.png"
import img2 from "./img/hot-dog2.png"
import img3 from "./img/hot-dog3.png"

function App() {
  const [itens, setItens] = React.useState([]);

  const loadItens = async () => {
    const res = await axios.get('http://localhost:3001/api/menuitens');
    setItens(res.data);
  };

  React.useEffect(() => {
    loadItens();
  }, []);

  return (
    <section className="app">
      <Header/>
      <main>
        <div>
          <div className="title-search">
            <h1>Cardápio</h1>
            <input className="search" type="text"/>
          </div>
          {itens.map((item)=>{
            return <MenuItem title={item.name} description={item.description} price={item.price} img={item.image} />
          })}
        </div>
      </main>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))