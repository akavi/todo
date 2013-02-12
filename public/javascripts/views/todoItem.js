TodoItem = Backbone.View.extend({

	tagName: "li",
	
	initialize: function() {
		this.template = Handlebars.compile($("#todo_item").html());
	},
	
	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
	
});