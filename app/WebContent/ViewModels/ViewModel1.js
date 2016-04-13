/**
 * 
 */
define(['knockout', 'vm/ViewModel2'], function(ko, view2){
	var viewModel1 = function(){
		this.name = ko.observable('VIEW MODEL 1');
		this.vm2Visible = ko.observable(false);
		this.callViewModel2 = function(){
			this.vm2Visible(!this.vm2Visible())
		};
		this.view2 = new view2();
	};
	return viewModel1;
});