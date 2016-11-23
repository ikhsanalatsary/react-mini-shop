import React from 'react';
import { Link, IndexLink } from 'react-router';

const styles = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: 20 + 'px',
  color: '#08489D'
}

const Menu = () => {
  return (
    <nav>
      <div className='container-mini'>
        <div className='row'>
          <div className='col-xs-8'>
            <a style={styles} href='#'>
              React Mini Shop
            </a>
          </div>
          <div className='col-xs-4 text-right'>
            <button><i className='ion-ios-search-strong'></i></button>
            <button>
              <a href='#/cart'>
                <i className='ion-bag'>
                  <span className='badge animated'>1</span>
                </i>
              </a>
            </button>
            <button><i className='ion-pricetags'></i></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Menu;
