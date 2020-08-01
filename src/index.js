import React from 'react';
import ReactDOM from 'react-dom';
import Textboxes from './component/Textboxes'

const App =()=>
{return(<div> <Textboxes></Textboxes></div>
 
);};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
