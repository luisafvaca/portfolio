import React from 'react';
import HomePage from './common/js/home-page';
import './common/css/main.scss';

 var App = React.createClass({
  render() {
    return (
      <div>
        <HomePage title={'\"It was going to be a lonely trip back...\"'}/>
      </div>
    )
  }
})

export default App
