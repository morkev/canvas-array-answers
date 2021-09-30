// Spit out all your answers in an array:
var answerList = [];
$(".question_input").each(function() {
	answerList.push($(this).val())
})

// Put your answers in global variable answerList
// (i.e. paste the answers from your clipboard).
answerList = [];

inputs = $(".question_input")
for(i = 0;i < answerList.length;i++) {
	console.log("Question " + (i + 1) + ":" + answerList[i])
	console.log("ELEMENT FOR QUESTION:");
	console.log(inputs[i])
	var currentInput = inputs[i]
	$(inputs[i]).val(answerList[i])
}
