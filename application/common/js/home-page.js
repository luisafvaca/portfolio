import React from 'react';
import data from '../../data/data.json';
import style from '../css/home-page.scss';
import className from 'classnames/bind';
import Navbar from './nav-bar'

const css = className.bind(style);

const HomePage = React.createClass ({
  render() {
    const { title } = this.props;
    return(
      <section className={css('content')} style={{backgroundImage:`url(${getPictures(data)})`}}>
        <Navbar items={ ['About', 'Photography'] } />
        <h1 className={css('content-title')}> {title} </h1>
      </section>
    )
  }
})


let getPictures = (dt) => {
  var arr = [],
      random;
  dt.content.map(function(a){
    if(a.type === 'image'){
      arr.push(a.url);
    }
  });
  random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}

export default HomePage;
