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

let original = [];

function App() {
  const [itens, setItens] = React.useState([]);


  const loadItens = async () => {
    const res = await axios.get('http://localhost:3001/api/menuitens');
    original = res.data;
    setItens(res.data);
  };

  React.useEffect(() => {
    loadItens();
  }, []);

  const handleChange = (e)=>{
    const written = e.target.value;
    const newItens = original.filter((element)=>{
      return element.name.toLowerCase().includes(written.toLowerCase());
    });
    setItens(newItens);
  }

  return (
    <section className="app">
      <Header/>
      <main>
        <div>
          <div className="title-search">
            <h1>Cardápio</h1>
            <input className="search" type="text" onChange={handleChange}/>
          </div>
          {itens.map((item)=>{
            return <MenuItem key={item._id} title={item.name} description={item.description} price={item.price} img={item.image} />
          })}
        </div>
      </main>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))