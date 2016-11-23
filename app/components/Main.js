import React from 'react';
import Menu from './Menu.js';

const Main = (props) => {
  return (
    <div>
      <Menu></Menu>
      <div className='main-wrapper'>
        {props.children}
      </div>
      <a className="back-to-top"><i className="ion-chevron-up"></i></a>
      <footer>
        <div className="container-mini">
          <p className="copyright">
            Copyright (c) By<a href="https://github.com/ikhsanalatsary">IkhsanNetwork</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
