import React, { Component } from 'react';
import { Link } from 'react-from';

export default class NavContainer extends Component {
   render() {
   	<div className="nav-container">
   	<div className="site_title"><Link to="/">WEBSITE TITLE</link></div>
   }
}

constructor(props) {
  
  super(props);
  this.state {
  	windowWidth: window.innerWidth,
  	mobileNaVisible: false
  }

  this.state = {};
}

handleResize() {
	this.setState({windowWidth: window.innerWidth});
}

componentDidMount() {
	window.addEventListener('resize',this.handleResize.bind(this));
}

componentWillMount() {
	window.removeEventListener('resize', this.handleResize.bind(this));
}

navigationLinks() {
	return [
      <ul>
        <li key={1}> <Link to="about"> SOBRE </Link></li>
      </ul>
	]
}
	
renderNavigation() {
  if(this.state.windowWidth <=  1080) {
    return [
       <div className="mobile_nav">
	<p onClick={this.handleNavClick.bind(this)}><i class="material-icons"> view_headline<i></p>
	{ this.renderMobileNav()  }
      </div>
    ];
  } else {
  return [
    <div key={7} className="nav_menu">
    { this.navigationLinks() }    	
    ];
  }	
}
