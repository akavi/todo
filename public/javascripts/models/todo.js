Todo = Backbone.Model.extend({

	defaults: {
		isDone: false
	},
	
	validate: function(attrs) {
		if (!attrs.desc) {
			return "Please enter a description"
		}
	}
	
});