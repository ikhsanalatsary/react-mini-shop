import React from 'react';
import Products from './Products.js';

const products = [
    {
      id: 1,
      name: "Iphone 5 S",
      image: 'product-1.jpg',
      price: 9000000,
      stocks: [{
          color: "black",
          stock: 30
      }, {
          color: "silver",
          stock: 20
      }, {
          color: "gold",
          stock: 10
      }, {
          color: "rose gold",
          stock: 5
      }, ],
      liked: false,
      detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      categories: ['phone'],
      comments: [{
          content: "Waaah.. keren bingit Hpnya!"
      }, {
          content: "Barangnya Sampai dengan Selamat Gan, Makasih. Packaging-nya juga bagus! Recommended banget deh pokoknya"
      }, ]
    }, {
      id: 2,
      name: "Smart Phone Apple",
      image: 'product-2.jpg',
      price: 10500000,
      stocks: [{
          color: "white",
          stock: 50
      }, ],
      liked: false,
      detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      categories: ['phone'],
      comments: [{
          content: "Pinter bingit Hpnya!"
      }, ]
    }, {
      id: 3,
      name: "Flatty Phone With Earphone",
      image: 'product-3.jpg',
      price: 7500000,
      stocks: [{
          color: "white",
          stock: 20
      }, {
          color: "black",
          stock: 10
      }, ],
      liked: false,
      detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      categories: ['phone'],
      comments: [{
          content: "Earphonenya Mantabs Gan!"
      }, ]
    }, {
      id: 4,
      name: "Book And Pen",
      image: 'product-4.jpg',
      price: 150000,
      stocks: [{
          color: "brown",
          stock: 150
      }, {
          color: "silver",
          stock: 15
      }, ],
      liked: false,
      detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      categories: ['accessories'],
      comments: [{
          content: "Bukunya Elegan! Saya suka dengan Warnanya"
      }, ]
    }, {
      id: 5,
      name: "An Ipad",
      image: 'product-5.jpg',
      price: 10000000,
      stocks: [{
          color: "black",
          stock: 10
      }, {
          color: "silver",
          stock: 10
      }],
      liked: false,
      detail: "<p>This is the details of the Ipad, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      categories: ['pad'],
      comments: [{
          content: "Sukak banget sama yang warna Merah"
      }, {
          content: "Barangnya Sampai dengan Selamat Gan, Makasih. Packaging-nya juga bagus! Recommended banget deh pokoknya"
      }, ]
    }, {
      id: 6,
      name: "Mobile IOS",
      image: 'product-6.jpg',
      price: 13000000,
      stocks: [{
          color: "gold",
          stock: 10
      }, {
          color: "black",
          stock: 10
      }, {
          color: "silver",
          stock: 10
      }],
      liked: false,
      detail: "<p>This is the details of the Mobile IOS, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      categories: ['phone'],
      comments: []
    }
];
if (!localStorage.getItem('reactminishop')) {
  localStorage.setItem('reactminishop', JSON.stringify(products));
}

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    var lists = products;
    return(
      <div className='container-mini'>
        <div>
        {lists.map(product => {
          return <Products key={product.id} product={product} />
        })}
      </div>
    </div>
    );
  }
}

export default ListProducts;
