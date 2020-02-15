import React, { Component } from 'react';
import {Parent, Sibling} from './index.js';

class ContextDemo extends Component {
 render() {
   return (
     <div>
        <Parent/>
        <Sibling/>
        <Parent/>
     </div>
   )
 }
}

export default ContextDemo;