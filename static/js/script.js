function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function flashMsg(msg) {
	$('#messages').remove();
	var msg = '<div id="messages"><div>' + msg + '</div></div>';
	$('#wrapper').prepend(msg);

	var height = $('#messages').height();
	$('#messages').css('top', '-'+height+'px')
		.css('display', 'block')
		.animate({top: '0'}, 400, function(){
			$('#messages').fadeOut(300);
		}).delay(2500);
}
