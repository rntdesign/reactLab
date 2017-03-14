var Listitem = React.createClass({
	
	getInitialState: function() {
		
		return {
			isSelected: false;
		};

	},

	handleClick: function() {
		this.setState({
			isSelected: true
		});
	},

	render: function() {

	}

});