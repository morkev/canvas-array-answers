// Prints all the correct & incorrect answers
// on a quiz with multiple bubble questions.
// @author Kevin Mora

var printIt = function(arr){
	for(var i = 0; i < arr.length; i++){
		console.log('Q: '+arr[i].q_text+'\n');
		console.log('A: '+arr[i].a_text+'\n\n');
	}
};

var rights = [], 
    wrongs = [];
$('.display_question').each(function(){
	var incorrect = $(this).hasClass('incorrect'),
		question_text = $(this).find('.question_text').text().trim(),
		answer_text = $(this).find('.selected_answer .select_answer').text().trim(),
		qaObj = {
			'q_text': question_text,
			'a_text': incorrect ? 'NOT '+answer_text : answer_text,
		};
	if(incorrect){
		wrongs.push(qaObj);
	} else {
		rights.push(qaObj);
	}
});

console.log(rights.length + ' correct');
console.log(wrongs.length + ' incorrect');
console.log('CORRECT:\n');
printIt(rights);
console.log('INCORRECT:\n');
printIt(wrongs);
