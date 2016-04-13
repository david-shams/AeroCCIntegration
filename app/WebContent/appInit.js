require.config({
    baseUrl: "app",
    paths: {
    	"jquery": "lib/jquery",
        "vm": "ViewModels",
		'trafficcop': 'lib/trafficcop',
		"knockout": 'lib/knockout',
		"infuser": 'lib/infuser',
		"koExternalTemplate": "lib/koExternalTemplate"
    },
	shim: {
	}
 });
//require(["jquery", "lib/knockout", "vm/app", "vm/ViewModel1"],
require(["jquery", "knockout", "vm/app", "vm/ViewModel1"],
		function($, ko, app, viewModel1) {
	window.ko = ko;
	app.templateEngine.defaults.templateSuffix = '.tmpl.html';
	app.templateEngine.defaults.templateUrl = 'Views';
	app.view1 = new viewModel1();
	ko.applyBindings(app, document.getElementById('ko-content'));
}); 