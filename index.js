let starCount = 0;
let myAccessories = [];
const accessoriesPrice = {
	"Basketball": 2,
	"Plant": 5,
	"Cake": 5,
	"Camera": 5,
	"Glasses": 7,
	"PartyHat": 7,
	"IceCream": 7,
	"BandAid": 2,
	"Hat": 2,
	"Butterfly": 3,
	"Computer": 7,
	"Pen": 3,
	"Strawberry": 3
}

let currentlyEmployed = "";

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
		loadProfile();
	}
	document.getElementById("starting").style.display = "none";
}

let todayHabits = { // where the value is whether or not the habit is completed
};

const loadHabits = () => {
	const todaySection = document.getElementById("today");

	if (todayHabits.length === 0) {
		const noHabits = document.createElement("p");
		noHabits.innerHTML = "No tasks yet...";
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
		starCount--;
		updateStarCount();
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
	inputBox.placeholder = "input task here and press enter to submit"
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

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function purchase(name) {
	if (myAccessories.includes(name)) {
		alert("You've already bought this accessory!")
		return;
	}
	
	if (starCount >= accessoriesPrice[name]) {
		starCount -= accessoriesPrice[name];
		updateStarCount();
		myAccessories.push(name);
		const cash = new Audio('cash.mp3');
		cash.play();
	} else {
		const countEl = document.getElementById("star-count")
		for (let i = 0; i < 3; i++) {
			await sleep(300)
			countEl.style.color = "red";
			await sleep(300)
			countEl.style.color = "#475657ff"
		}
	}
}

const equip = (name) => {
	currentlyEmployed = name;
	loadProfile();
}

const loadProfile = () => {
	const profileSection = document.getElementById("profile");
	while (profileSection.firstChild)
		profileSection.removeChild(profileSection.lastChild);

	const yourPusheen = document.createElement("div");
	yourPusheen.id = "your-pusheen";

	const text = document.createElement("p");
	text.innerHTML = "your accessories:";
	text.style['font-size'] = '1.5rem';
	yourPusheen.appendChild(text);

	const cat = document.createElement("img");
	cat.src = currentlyEmployed + "Cat.jpg";
	cat.width = 400;
	yourPusheen.appendChild(cat);

	profileSection.appendChild(yourPusheen)

	const accessories = document.createElement("div");
	accessories.id = "my-accessories";

	profileSection.appendChild(accessories)

	for (let i = 0; i < myAccessories.length; i++) {
		let accessory = myAccessories[i];
		const accessoryEl = document.createElement("img");
		accessoryEl.src = accessory + ".jpg";
		accessoryEl.onclick = () => { equip(accessory) };
		document.getElementById("my-accessories").appendChild(accessoryEl);
	}
}

const petMovement = () => {
	HTMLImageElement.pusheen.classList.add("animate__animated animate__bounce animate__repeat-2")
}

const removeHabits = () => {
	
}