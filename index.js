const togglePage = (id) => {
	if (id === "habits") {
		document.getElementById("habits").display = "block";
		document.getElementById("shop").display = "none";
		document.getElementById("profile").display = "none";
	} else if (id === "shop") {
		document.getElementById("habits").display = "none";
		document.getElementById("shop").display = "block";
		document.getElementById("profile").display = "none";
	} else {
		document.getElementById("habits").display = "none";
		document.getElementById("shop").display = "none";
		document.getElementById("profile").display = "block";
	}
}