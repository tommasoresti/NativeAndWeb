import React      from 'react';
import { render } from 'react-dom';
import Main from './components/Main'

const rootElement = document.getElementById('root');

render(

<div style={{height: "100%", width: "100%", backgroundColor: "#CCC"}}>
  <Main/>
</div>,

  rootElement );
