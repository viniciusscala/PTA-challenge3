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
      <MenuItem/>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))