import React from 'react';
import data from '../../data/data.json';
import style from '../css/fullScreenImg.scss';
import className from 'classnames/bind';

const css = className.bind(style);

const fullView = React.createClass ({
  render() {
    return(
      <section className={css('content')}>
        <img className={css('content-img')} src={getPictures(data)}></img>
      </section>
    )
  }

})

var getPictures = (dt) => {
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

export default fullView;
