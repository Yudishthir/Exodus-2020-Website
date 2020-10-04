let turn = false;

function hamburger() {
	var x = document.getElementsByClassName("web-nav-list");
	let icon = document
		.getElementById("mobileButton")
		.getElementsByTagName("i")[0];
	if (!turn) {
		x[0].style.display = "flex";
		icon.classList.remove("fa-bars");
		icon.classList.add("fa-times");
		turn = true;
	} else {
		x[0].style.display = "none";
		icon.classList.remove("fa-times");
		icon.classList.add("fa-bars");
		console.log(icon.classList);
		turn = false;
	}
}
