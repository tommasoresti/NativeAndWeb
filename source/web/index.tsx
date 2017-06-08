import React      from 'react';
import { render } from 'react-dom';
import FruitList from "./FruitList";
import {JSFruitRepository} from "../common/interactor/implementation/JSFruitRepository";

const rootElement = document.getElementById('root');

render(

<div style={{height: "100%", width: "100%", backgroundColor: "#CCC"}}>
  <span>Hello Web</span>
  <FruitList repository={new JSFruitRepository()}/>
</div>,

  rootElement );
