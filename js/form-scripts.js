$("#bookingForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
	var name = $("#inputName").val();
	var email = $("#inputEmail").val();
	var tel = $("#inputTel").val();
	var qt = document.querySelector('input[name=numberOfPeople]:checked').value
	var dateOrder = $("#inputDateOrder").val();
	var totalPrice = $("#totalPrice").html();
	
	$.ajax({
		type: "POST",
		url: "php/form-process.php",
		data: "name=" + name + "&email=" + email + "&tel=" + tel + "&qt=" + qt + " &price="+ totalPrice + "&date=" + dateOrder,
		success: function(text) {
		console.log(text);
			if (text == "success") {
				formSuccess();
			} else {
				formError();
				submitMSG(false, text);
			}
		}
	});
}

function formSuccess(){
    $("#bookingForm")[0].reset();
    submitMSG(true, "Submitted!")
}

function formError(){
    $("#bookingForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}