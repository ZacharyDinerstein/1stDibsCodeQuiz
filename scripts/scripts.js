$('input[name=unitShape]').on('click', function(){
	$('div.measurement-input-section').removeClass("disabled");
	$('div.measurement-input-section input').prop("disabled", false);
})