import React from 'react';
import Menu from './Menu.js';

class Main extends React.Component {
  handleSearch(e) {
    e.preventDefault;
    if (e.charCode == 13) {
      this.props.router.push('/?q=' + e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <Menu onSearch={this.handleSearch.bind(this)}></Menu>
        <div className='main-wrapper'>
          {this.props.children}
        </div>
        <a className="back-to-top"><i className="ion-chevron-up"></i></a>
        <footer>
          <div className="container-mini">
            <p className="copyright">
              Copyright (c) By <a href="https://github.com/ikhsanalatsary">IkhsanNetwork</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
