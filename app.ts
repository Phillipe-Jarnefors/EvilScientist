const evilScientistList = document.querySelector(".evil-scientist-list") as HTMLElement
const updateList = document.querySelector(".update-list") as HTMLElement

updateList.addEventListener("click", function(event){
	printListOfScientists()
})

type evils = {
	name: string;
	age: number;
	henchmen: number;
	desc: string;
}

const evilScientists: evils[] = [
	{
		name: "Klaus Benedict",
		age: 50, 
		henchmen: 12,
		desc: "Built Frankensteins Monster more advanced",
	},
	{
		name: "Wilhelm Will",
		age: 40, 
		henchmen: 0,
		desc: "Lone Wolf",
	},
	{
		name: "Pingis Khan",
		age: 60, 
		henchmen: 100,
		desc: "Wish to rule the world",
	},
]


// ==== Show List of Evil ====
function printListOfScientists(): void {
	evilScientistList.innerHTML = '';
	let evilScientistsLength = evilScientists.length;
	for (let i = 0; i < evilScientistsLength; i++) {
		let divElem = document.createElement('div');
   		let h2Elem = document.createElement('h2');
		divElem.className = "card"
		h2Elem.className = "evil-name"
		h2Elem.innerHTML = `${evilScientists[i].name}`
		evilScientistList.append(divElem);
		divElem.append(h2Elem)
	}
}
printListOfScientists();

// ==== Show Info about the Evil Scientist ====



