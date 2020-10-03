let selected = false;
let btnArray = [];
let totalCost = 0;

function search() {
	// Declare variables
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("search-bar");
	filter = input.value.toUpperCase();
	ul = document.getElementById("course-list");
	li = ul.getElementsByTagName("li");

	console.log(li);
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("h1")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function add(event) {
	let btn = event.currentTarget;
	let receipt = document.getElementById("receipt-list");
	let cost = btn.parentNode.getElementsByClassName("course-id")[0].innerText;
	let course = btn.parentNode.getElementsByTagName("h1")[0].innerText;
	let total = document.getElementById("total-cost");

	if (btnArray.length != 0 && btn != btnArray[0]) {
		btnArray[0].style.backgroundColor = "#14c81a";
		btnArray[0].style.color = "#000000";
		btnArray[0].innerHTML =
			'Add <i class="fa fa-plus" aria-hidden="true"></i>';
		li = receipt.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("p")[0];
			c = li[i].getElementsByTagName("p")[1].innerText;
			if (
				a.innerText ==
				btnArray[0].parentNode.getElementsByTagName("h1")[0].innerText
			) {
				li[i].parentNode.removeChild(li[i]);
				c = c.substring(1);
				totalCost -= parseInt(c);
				total.innerText = totalCost;
			}
		}
		btnArray.pop();
		selected = false;
	}

	if (selected) {
		btn.style.backgroundColor = "#14c81a";
		btn.style.color = "#000000";
		btn.innerHTML = 'Add <i class="fa fa-plus" aria-hidden="true"></i>';
		// Remove from receipt
		li = receipt.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("p")[0];
			c = li[i].getElementsByTagName("p")[1].innerText;
			if (a.innerText == course) {
				li[i].parentNode.removeChild(li[i]);
				c = c.substring(1);
				totalCost -= parseInt(c);
				total.innerText = totalCost;
			}
		}
		selected = false;
		btnArray.pop();
	} else {
		btn.style.backgroundColor = "#000000";
		btn.style.color = "#14c81a";
		btn.innerHTML = 'Remove <i class="fa fa-minus" aria-hidden="true"></i>';
		// Add to receipt
		receipt.innerHTML += `<li>
        <p>${course}</p>
        <p>${cost}</p>
    </li>`;
		cost = cost.substring(1);
		totalCost += parseInt(cost);
		total.innerText = totalCost;
		selected = true;
		btnArray.push(btn);
	}
}

function addHostel() {
	let receipt = document.getElementById("receipt-list");
	let checkBox = document.getElementById("hostel");
	let total = document.getElementById("total-cost");

	if (checkBox.checked == false) {
		receipt.innerHTML += `<li>
        <p>Hostel charges</p>
        <p>$40000</p>
    </li>`;
		totalCost += 40000;
		total.innerText = totalCost;
	} else {
		li = receipt.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("p")[0];
			if (a.innerText == "Hostel charges") {
				li[i].parentNode.removeChild(li[i]);
				totalCost -= 40000;
				total.innerText = totalCost;
			}
		}
	}
}

function addMess() {
	let receipt = document.getElementById("receipt-list");
	let checkBox = document.getElementById("mess");
	let total = document.getElementById("total-cost");

	if (checkBox.checked == false) {
		receipt.innerHTML += `<li>
        <p>Mess charges</p>
        <p>$10000</p>
    </li>`;
		totalCost += 10000;
		total.innerText = totalCost;
	} else {
		li = receipt.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("p")[0];
			if (a.innerText == "Mess charges") {
				li[i].parentNode.removeChild(li[i]);
				totalCost -= 10000;
				total.innerText = totalCost;
			}
		}
	}
}
