require.config({
	deps: ['app'],
	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		underscore: 'vendor/underscore/underscore',
		backbonePure: 'vendor/backbone/backbonePure',
		backbone: 'vendor/backbone/backboneLoader',
		relational: 'vendor/backbone-relational/relational',
		localStorage: 'vendor/localstorage/backbone.localStorage',
		handlebars: 'vendor/handlebars/handlebars',		
		status: 'models/status',
		task: 'models/task',
		project: 'models/project',
		projectCollection: 'collections/projectcollection',
		statusCollection: 'collections/statuscollection',
		taskCollection: 'collections/taskcollection',
		projectView: 'views/projectview',
		showProjectView: 'views/showprojectview',
		alterProjectView: 'views/alterprojectview',
		projectsView: 'views/projectsview',
		appView: 'views/appview',
		router: 'router'
	},
	shim: {
		backbonePure: {
    		deps: ['jquery', 'underscore'],
      		exports: 'Backbone'
    	},
    	relational: {
    		deps: ['backbonePure', 'underscore']
    	},
    	localStorage: {
    		deps: ['backbonePure', 'underscore']
    	}
	}
});