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
		document.getElementById("today").style.display = "flex";
		loadHabits("today");
	} else {
		document.getElementById("this-week").style.display = "flex";
		document.getElementById("today").style.display = "none";
	}
}

let todayHabits = {
	"sleep": true,
	"drink water": false
};
let thisWeekHabits = {
	mon: {},
	tue: {},
	wed: {},
	thu: {},
	fri: {},
	sat: {},
	sun: {},
}

const loadHabits = (id) => {
	if (id === "today") {
		const todaySection = document.getElementById("today");
		for (const [key, value] of Object.entries(todayHabits)) {
			console.log(key)
			const habit = document.createElement("li");
			habit.innerHTML = key;
			todaySection.appendChild(habit);
		}

		for (let i = 0; i < todaySection.children.length; i++) {
			console.log(i);
			if (todayHabits[todaySection.children[i].textContent] === false) {
				todaySection.children[i].style.setProperty("text-decoration", "line-through");
			}
		}
	}
}