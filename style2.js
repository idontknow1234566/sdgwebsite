function check(){
	answer_1 = document.querySelector('input[name="t_1"]:checked').value;
	var correct_answer_1 = 17;
	
	if(answer_1 == correct_answer_1){
		document.getElementById("result").innerHTML = "yes";
	}
	else{
		document.getElementById("result").innerHTML = "you heretic!";
	}
}