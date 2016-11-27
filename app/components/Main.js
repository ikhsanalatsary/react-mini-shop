import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import Menu from './Menu.js';

import 'react-progress-bar-plus/lib/progress-bar.css';

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
        <ProgressBar percent={100} />
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
