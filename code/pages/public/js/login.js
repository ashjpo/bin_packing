$(document).ready(function() {
	$("#mws-login-form form").validate({
		errorPlacement: function(error, element) {  
		}, 
		invalidHandler: function(form, validator) {
			if($.fn.effect) {
				$("#mws-login-wrapper").effect("shake", {distance: 6, times: 2}, 35);
			}
		}
	});
});
