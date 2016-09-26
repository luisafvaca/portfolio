import React from 'react';
import style from '../css/nav.scss';
import className from 'classnames/bind';

const css = className.bind(style);

const nav = React.createClass({
  getInitialState: function() {
    return {active: false}
  },
  toggleNav: function(e) {
    console.log(this);
    e.preventDefault();
    let currentState = this.state.active;
    this.setState({active: !currentState});
  },
  render(){
    const { items } = this.props;
    return (
      <nav className={ css('nav', this.state.active ? 'active' : false) } onClick={this.toggleNav}>
        <div className={css('nav-burger')}>
          <span className={css('span-common')}></span>
          <span className={css('span-common')}></span>
          <span className={css('span-common')}></span>
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
