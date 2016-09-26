import React from 'react';
import dataPick from '../../data/data.json';
import style from '../css/home-page.scss';
import className from 'classnames/bind';
import Navbar from './nav-bar';
import { getQuotes } from './quotes';

const css = className.bind(style);

const HomePage = React.createClass ({
  componentDidMount() {
    return getQuotes().then((data) => {
      this.setState({
        contents: data.contents
      });
    });
  },

  render() {
    if (!this.state) return (<div></div>);

    const { quotes } = this.state.contents || { quotes: [{ quote: this.props.title }]};

    return(
      <section className={css('content')} style={{backgroundImage:`url(${getPictures(dataPick)})`}}>
        <Navbar items={ ['About', 'Photography'] } />
        <h1 className={css('content-title')}> { quotes[0].quote } </h1>
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
