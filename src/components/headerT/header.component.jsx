import React from 'react'
import './header.styles.scss'
import {toElement as scrollToElement} from '../utils/scroll/scroll.utils';

class Header extends React.Component {
  constructor(){
    super();

    this.state = {
      currentPage: ".landing-page"
    }
  }
    
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 80,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    this.setState({currentPage: pageSelector});
    scrollToElement(nextPage);
  }



  render(){
    return(
        <nav id="header">
            <div className="menu">
              <div className={"menu__item " + (this.state.currentPage === '.landing-page' ? 'active': null)}  onClick={(e) => this.scrollToPage('.landing-page')}>
                Home
              </div>
              <div className={"menu__item " + (this.state.currentPage === '.about-page' ? 'active': null)} onClick={(e) => this.scrollToPage('.about-page')}>
                About
              </div>
              <div className={"menu__item " + (this.state.currentPage === '.main-directory' ? 'active': null)} onClick={(e) => this.scrollToPage('.main-directory')}>
                Projects
              </div>
              <div className="menu__item">
                  <a  href="https://drive.google.com/open?id=1vHtYdc-zKYGFdvL5GJYdKhndgroRUebw" target="_blank">Resume</a>
              </div>
            </div>
        </nav>
    )
  }

}

export default Header;