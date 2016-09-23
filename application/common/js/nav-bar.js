import React from 'react';
import style from '../css/nav.scss';
import className from 'classnames/bind';

const css = className.bind(style);

const nav = React.createClass({
  render() {
    console.log(this.props)
    const { items } = this.props;
    return (
      <nav className={css('nav')}>
        <div className={css('nav-burger')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={css('nav-items')}>
          {
            items.map((element, i) => {
              return (
                <li className={css('nav-item')}  key={i}> {element}</li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
})

export default nav
