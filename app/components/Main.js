import React from 'react';
import Menu from './Menu.js';

const Main = (props) => (
  <div>
    <Menu></Menu>
    {props.children}
    <footer>
      <div className="container-mini">
        <p className="copyright">
          Copyright (c) By<a href="https://github.com/ikhsanalatsary">IkhsanNetwork</a>
        </p>
      </div>
    </footer>
  </div>
);

export default Main;
