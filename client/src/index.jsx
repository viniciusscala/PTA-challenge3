import React from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Button,
  MenuItem,
  Footer
} from './components';

function App() {
  return (
    <section className="app">
      <Header/>
      <MenuItem title="teste" description="testeee" price="10,00"/>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))