import React from 'react';
import ReactDOM from 'react-dom';

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
  return (
    <section className="app">
      <Header/>
      <main>
        <div>
          <div className="title-search">
            <h1>Cardápio</h1>
            <input className="search" type="text"/>
          </div>
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img1} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img2} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img3} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img1} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img2} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img3} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img1} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img2} />
          <MenuItem title="Hot dog clássico" description="Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu." price="8,00" img={img3} />
        </div>
      </main>
      <Footer/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))