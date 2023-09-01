import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <span className="logo">HouseStuff</span>
          <ul className='nav'>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
          </ul>
        </div>
        <div className="presentation"></div>
      </header>
    );
  }
}

export default Header;