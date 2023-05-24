var N_of_q = 1;
			var A_of_qs = 23;
			function next_question() {
				document.getElementById("question" + N_of_q).className = "class_none";
				N_of_q++;
				
				if(N_of_q == A_of_qs) {
					document.getElementById("button_next").innerHTML="Check";
				}else if (N_of_q > A_of_qs) {
					document.getElementById("button_next").className="class_none";
					check();
				}
				if(N_of_q <= A_of_qs){
					document.getElementById("question" + N_of_q).className = "class_block";
				}
			}
		
			function check() {
				score = 0;
				
				correct_answer = ["Sustainable Development Goals", 17, "No Poverty", "2035", "COVID-19", 17, 7, 4, "lack of education", 4, "children", "UNDP", 1, 3, 2, "95", "1998", "3%", "East Asia and the Pacific, Europe and Central Asia", "10%", 4, 1, "New York"];
				
				for (N_of_q = 1; N_of_q <= A_of_qs; N_of_q += 1){
					if((N_of_q==1) || (N_of_q==3) || (N_of_q==4) || (N_of_q==5)|| (N_of_q==9)|| (N_of_q==11)|| (N_of_q==12)|| (N_of_q==16)|| (N_of_q==17)|| (N_of_q==18)|| (N_of_q==19)||(N_of_q==20)||(N_of_q==23)){
						answer = document.getElementById("t" + N_of_q).value;
					}else{
						answer = document.querySelector('input[name=' + "t_" + N_of_q + ']:checked')?.value;
					}

					if(answer == correct_answer[N_of_q - 1]) {
						score++;
					}
				}
				percent = score/N_of_q * 100; 
				
				document.getElementById("result").innerHTML = "Tasks completed " + Math.round(percent) +" %"+" correctly."
				
				if(score == N_of_q) {
					document.getElementById("result").innerHTML += " Good job.";
				}
				else {
					document.getElementById("result").innerHTML += " You unpeeled cabbage.";
				}
				
			
			}