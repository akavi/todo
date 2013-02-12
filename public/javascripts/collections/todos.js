Todos = Backbone.Collection.extend({

	localStorage: new Backbone.LocalStorage("ToDos"),

	model: Todo
	
});