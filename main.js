$(document).ready(function(){

	var $colorInput = $('#color');
	var $body = $('body');
	$colorInput.on('input', function(){
		$body.css('backgroundColor', $colorInput.val());
	});

});
