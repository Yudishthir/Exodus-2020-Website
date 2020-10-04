let typerparent = document
	.getElementById("home-title")
	.getElementsByTagName("h1")[0];
let typer = typerparent.innerText;
typer += "|";
let str;
let turner = true;

typing();

function typing() {
	if (turner) {
		str = typer.slice(0, -1);
		turner = false;
	} else {
		str = typer.substring(0);
		turner = true;
	}
	typerparent.innerText = str;
	setTimeout(typing, 500);
}
