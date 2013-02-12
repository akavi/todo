MainApp = Backbone.View.extend({
	
	el: ".container",
	
	events: {
		"submit #todo_form": "_createTodo"
	},
	
	initialize: function() {
		_.bindAll(this);
		TodoCollection.on("add", this._addOne);
		TodoCollection.on("reset", this._addMany);
	},
	
	_createTodo: function(e) {
		console.log("eh")
		e.preventDefault();
		var m = TodoCollection.create({
			"desc": this.$("#todo_description").val(),
			"isDone": false
		});
		if (m.validationError) {
			alert(m.validationError);
			return;
		}
		this.$("#todo_description").val("");
		
	},
	
	_addOne: function(m) {
		
		var v = new TodoItem({
			model:m
		});
		this.$("#todos_list").append(v.render().el);
	},
	
	_addMany: function() {
		
	}
	
})