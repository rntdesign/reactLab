var TestApp = React.createClass({
	
	getComponent: function(index) {
		
		$(	this.getDOMNode().find('li:nth-child(' + index +')').css({
			'background-color' : '#ccc'
		});
	},

	render: function() {
		return (
		  
		  <div>
		  	
		  	<ul>
		  	  <li onClick={this.getComponent.bind(this, 1)}>Component 1 </li>
		  	  <li onClick={this.getComponent.bind(this, 2)}>Component 2 </li>
		  	  <li onClick={this.getComponent.bind(this, 3)}>Component 3 </li>
		  	</ul>
		  </div>
		);

	}
});

 React.renderComponent(<TestApp /> document.getElementById('soln1'));

 
