// Returns all Q&A blocks
$('.display_question')

// Returns all incorrect Q&A blocks
$('.display_question.incorrect')

// Saves stringified js object in localStorage
localStorage.setItem('test', JSON.stringify({ 'one': 1, 'two': 2, 'three': 3 }))

// Parses object from localStorage
JSON.parse(localStorage.getItem('test'))

// Test Selection 
$('.display_question').each(function(){
	$(this).find('.answer_input > input').each(function(){
		console.log($(this).attr('value'));
	});
});