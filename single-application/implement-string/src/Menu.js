import React, { Component } from 'react';
//import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-header">
            
            <ul>
               <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>

        </div>
      </div>
    );
  }
};


export default Menu;
