import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import Menu from '../components/Menu.js';

import 'react-progress-bar-plus/lib/progress-bar.css';
import '../assets/styles/main.css';

class Main extends React.Component {
  handleSearch(e) {
    e.preventDefault;
    if (e.charCode == 13) {
      this.props.router.push('/?q=' + e.target.value);
      e.target.value = '';
    }
  }

  scrolltoTop(scrollDuration) {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / ( scrollDuration / 15 );
    const cosParameter = scrollHeight / 2;
    var scrollCount = 0;
    var scrollMargin;
    var scrollInterval = setInterval(() => {
      if ( window.scrollY != 0 ) {
        scrollCount = scrollCount + 1;
        scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
        window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
      }
      else clearInterval(scrollInterval);
    }, 15 );
  }

  render() {
    return (
      <div>
        <ProgressBar percent={100} />
        <Menu onSearch={this.handleSearch.bind(this)}></Menu>
        <div className='main-wrapper'>
          {this.props.children}
        </div>
        <a onClick={this.scrolltoTop.bind(this, 1000)} className="back-to-top"><i className="ion-chevron-up"></i></a>
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
