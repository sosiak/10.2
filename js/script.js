$(document).ready(function() {
	$("span:even").css('color', 'yellow');
	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	$(element).append(button);
	});

	$('button').click(function() {
		alert($(this).attr('data-tmp'));
	});
});


