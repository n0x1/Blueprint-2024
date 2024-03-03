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
		loadHabits("today");
	} else {
		document.getElementById("this-week").style.display = "block";
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
			const wrapper = document.createElement("p");
			wrapper.appendChild(document.createElement("span"))
			const habit = wrapper.children[0];
			habit.innerHTML = "&nbsp;" + key + "&nbsp;";
			wrapper.style.color = "#4a6d7cff";
			if (!value) habit.style['text-decoration'] = 'line-through';
			habit.style.color = "black";
			// set onclick ot previewStrikethrough
			wrapper.classList.add("habit");
			wrapper.onclick = () => completeHabit(true, habit);
			todaySection.appendChild(wrapper);
		}
	}
}

const completeHabit = (today, habit) => {
	habit.style['text-decoration'] = 'line-through';
}