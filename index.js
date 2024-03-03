let starCount = 0;
let myAccessories = [];
const accessoriesPrice = {
	"Basketball": 2,
	"Plant": 5,
	"Cake": 5,
	"Camera": 5,
	"Glasses": 10,
	"PartyHat": 10,
	"IceCream": 10,
	"BandAid": 2,
	"Hat": 2
}

const togglePage = (id) => {
	if (id === "habits") {
		document.getElementById("habits").style.display = "block";
		document.getElementById("shop").style.display = "none";
		document.getElementById("profile").style.display = "none";
		loadHabits()
	} else if (id === "shop") {
		document.getElementById("habits").style.display = "none";
		document.getElementById("shop").style.display = "block";
		document.getElementById("profile").style.display = "none";
	} else {
		document.getElementById("habits").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("profile").style.display = "block";
	}
	document.getElementById("starting").style.display = "none";
}

let todayHabits = { // where the value is whether or not the habit is completed
};

const loadHabits = () => {
	const todaySection = document.getElementById("today");

	if (todayHabits.length === 0) {
		const noHabits = document.createElement("p");
		noHabits.innerHTML = "No habits yet...";
		noHabits.style['text-align'] = 'center';
		todaySection.appendChild(noHabits);
		return;
	}

	while (todaySection.firstChild) // clear the section
		todaySection.removeChild(todaySection.lastChild);

	for (const [key, value] of Object.entries(todayHabits)) {
		const wrapper = document.createElement("p");
		wrapper.appendChild(document.createElement("span"))
		const habit = wrapper.children[0];
		habit.innerHTML = "&nbsp;" + key + "&nbsp;";
		wrapper.style.color = "#4a6d7cff";
		if (value) habit.style['text-decoration'] = 'line-through';
		habit.style.color = "black";
		// set onclick ot previewStrikethrough
		wrapper.classList.add("habit");
		wrapper.onclick = () => toggleHabit(habit);
		todaySection.appendChild(wrapper);
	}
}

const toggleHabit = (habit) => {
	const habitText = habit.innerHTML.replaceAll("&nbsp;", "")
	if (todayHabits[habitText]) { // if completed is true
		habit.style['text-decoration'] = 'none';
		todayHabits[habitText] = false;
	} else {
		habit.style['text-decoration'] = 'line-through'
		todayHabits[habitText] = true;
		const audio = new Audio('bell.wav');
		audio.play();
		starCount++;
		updateStarCount();
	}
}

const updateStarCount = () => {
	document.getElementById("star-count").children[0].innerHTML = "your stars: " + starCount;
}

const addHabit = () => {
	// create an input
	const inputBox = document.createElement("input");
	inputBox.placeholder = "new habit..."
	document.getElementById("today").appendChild(inputBox);
	// check for enter and create new habit
	inputBox.addEventListener("keyup", (event) => {
		if (event.key == "Enter") {
			text = inputBox.value;
			console.log(text);
			document.getElementById("today").lastChild.remove();
			todayHabits[text] = false;
			loadHabits();
		}
	})
}

const purchase = (name) => {
	if (starCount > accessoriesPrice[name]) {
		
	}
}