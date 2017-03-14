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
	   var isSelected = this.state.isSelected;
           var style = {
               'background-color': ''
           };
           if (isSelected) {
               style = {
                   'background-color': '#ccc'
               };
           }
           return (
               <li onClick={this.handleClick} style={style}>{this.props.content}</li>
           );
	}

});

React.renderComponent(<TestApp2 />, document.getElementById('soln2'));
