// Returns all Q&A blocks
$('.display_question')

// Returns all incorrect Q&A blocks
$('.display_question.incorrect')

// Test Selection 
$('.display_question').each(function(){
	$(this).find('.answer_input > input').each(function(){
		console.log($(this).attr('value'));
	});
});
