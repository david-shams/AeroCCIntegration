define(["jquery", "knockout", "infuser", "koExternalTemplate"],
	function($, ko, infuser) {
	var app = {
		applicationName: ko.observable('KNOCKOUT TEST'),
		templateEngine: infuser
	};
	return app;
});