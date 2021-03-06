define(['jquery', 'underscore', 'backbone', 'task', 'addTaskView'], function($, _, Backbone, Task, AddTaskView){
	return Backbone.View.extend({
		tagName: 'tr',
		template: _.template( $('#show_single_task_template').html() ),

		initialize: function(){
			this.model.on('destroy', this.unRender, this);
		},

		events: {
			'click .delete': 'deleteTask',
			'click .update': 'updateTask'
		},

		//Function to render the show task view
		render: function(){
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		},

		//Function to delete a project-task
		deleteTask: function(e){
			e.preventDefault();
			//Destroy the model, wil trigger destroy event
			var proje = this.model.get('project');
			proje.get('tasks').get(this.model).destroy();
			proje.save();
		},

		//Function to render Update form on specific task
		updateTask: function(e){
			e.preventDefault();
			
			var proje = this.model.get('project');
			this.addTaskView = new AddTaskView( { model: proje } );
			this.addTaskView.task = this.model;
			this.addTaskView.render();

			//Append the form to the DOM
			$('#new_task_div').empty().append( this.addTaskView.el );
		},

		//Function to unrender a delete project
		unRender: function(){
			this.remove(); //this.$el.remove();
		}
	});
});