var Menu  = React.createClass({
	getInitialState: function()  {
		return {
			visible: false
		};
	},
	show: function() {
		this.setState({visible: true});
		document.addEventListener("click",this.hide.bind(this));
	},
	hide: function() {
		document.removeEventListener("click",this.hide.bind(this));
		this.setState({visible: false});
	},
	render: function() {
		return <div className="menu">
			<div ClassName={(this.state.visible ? 	"visible" : "") + }	
	}
});


var App = React.createClass({
	showLeft: function() {
		this.refs.left.show();
	},
	showRight: function() {
		this.refs.right.show(); 
	},
	render: function() {
		return <div>
		<button onClick={this.showLeft}> Show Left Menu </button>
		<Menu ref="left" aligment="left"> 
			<Menuitem hash="first-page">First Page</Menuitem>
			<Menuitem hash="second-page">Second Page</Menuitem>
			<Menuitem hash="third-page">Third Page </Menuitem>
		</Menu>
	}
})











