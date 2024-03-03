const togglePage = (id) => {
	if (id === "habits") {
		document.getElementById("habits").style.display = "block";
		document.getElementById("shop").style.display = "none";
		document.getElementById("profile").style.display = "none";
	} else if (id === "shop") {
		document.getElementById("habits").style.display = "none";
		document.getElementById("shop").style.display = "block";
		document.getElementById("profile").style.display = "none";
	} else {
		document.getElementById("habits").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("profile").style.display = "block";
	}
}

const toggleHabits = (id) => {
	if (id === "today") {
		document.getElementById("this-week").style.display = "none";
		document.getElementById("today").style.display = "block";
	} else {
		document.getElementById("this-week").style.display = "block";
		document.getElementById("today").style.display = "none";
	}
}