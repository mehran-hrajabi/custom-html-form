function formValidation(){
	
	var firstname , lastname , email , comment , finalmsg , error , head , msg ;
	
	finalmsg = document.getElementById("modalmessage");
	finalmsg.innerHTML = "" ;
	head = document.getElementById("modalhead");
	head.innerHTML = "" ;
	firstname = document.getElementById("fname").value ;
	lastname = document.getElementById("lname").value ;
	email = document.getElementById("useremail").value ;
	comment = document.getElementById("commenttext").value ;
	
	/*Empty field*/
	if(firstname=="" || lastname=="" || email=="" || comment==""){
			error = "Please fill out all necessary fields." ;
			finalmsg.innerHTML = error ;
			msg = "Error!"
			head.innerHTML = msg ;
	}
	/*Short comment*/
	else if(comment.length<20){
			error = "Your comment should contain at least 20 characters." ;
			finalmsg.innerHTML = error ;
			msg = "Error!"
			head.innerHTML = msg ;
	}
	else {
		error = "Your comment has been submitted successfully." ;
		finalmsg.innerHTML = error ;
		msg = "Thank you!"
		head.innerHTML = msg ;
	}
	
	/* Refresh the form values after all */
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("useremail").value = "";
	document.getElementById("commenttext").value = "";
	
}