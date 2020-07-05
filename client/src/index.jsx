import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"

import {
  Header,
  Menu,
  Footer
} from './components';

function App() {
  return (
    <section className="app">
      <div className="top-part">
        <Header/>
        <Menu />
      </div>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))