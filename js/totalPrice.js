window.totalPrice = function() {

	var price = document.getElementById('totalPrice');
	var dateOrder = $("#inputDateOrder").val();
	var qt = document.querySelector('input[name=numberOfPeople]:checked').value

	day = dayFromString(dateOrder);
	if (day == 6 || day == 0) {
		switch (qt) {
		case "1":
			p = 1200;
			break;
		case "2":
			p = 1800;
			break;
		case "3":
			p = 2400;
			break;
		case "4":
			p = 3000;
			break;
		default:
			p = 3000;
		}
		$("#totalPrice").text(p);
	} else {
		switch (qt) {
		case "1":
			p = 1000;
			break;
		case "2":
			p = 1500;
			break;
		case "3":
			p = 1800;
			break;
		case "4":
			p = 2000;
			break;
		default:
			p = 2000;
		}
		$("#totalPrice").text(p);
	}

	function dayFromString(str) {
		var m = str.slice(0, 10);
		day = new Date(m);
		return day.getDay();
	}
}