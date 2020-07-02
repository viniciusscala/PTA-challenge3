import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Header,
  Button,
  MenuItem,
  Footer
} from './components';

function App() {
  return (
    <section className="app">
      {/* <Example /> */}
      <Header/>
      <MenuItem title="teste" description="testeee" price="10,00"/>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))