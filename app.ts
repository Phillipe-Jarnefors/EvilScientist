const evilScientistList = document.querySelector(".evil-scientist-list") as HTMLElement
const updateList = document.querySelector(".update-list") as HTMLElement
const cardShow = document.querySelector(".card-show") as HTMLElement
const formData = document.querySelector(".form-data") as HTMLElement
const submitForm = document.querySelector("#submit-form") as HTMLButtonElement;
 
updateList.addEventListener("click", function(event){
	printListOfScientists();
})

type Evils = {
	name: string;
	age: number;
	henchmen: number;
	desc: string;
}

const evilScientists: Evils[] = [
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

		h2Elem.addEventListener("click", (event) => {
			event.preventDefault();
			cardShow.innerHTML = ""
			let pickedEvil: string = h2Elem.innerText
			let evilArray: string[] = []
			
			const choosenEvil = evilScientists.find(evil => evil.name === pickedEvil) as Evils
			for (const [key, value] of Object.entries(choosenEvil)) {
				let evilString: string = '';
				evilString += key + ': ' + value
				evilArray.push(evilString)
			}
			let prettyArray = evilArray.map(letter => letter.charAt(0).toUpperCase() + letter.substring(1));
			
			prettyArray.forEach(element => {
				const listElement = document.createElement('li') as HTMLElement;
				const ulElement = document.createElement('ul') as HTMLElement;
				listElement.innerHTML = element;
				ulElement.append(listElement);
				cardShow.append(ulElement);
			})
		})
	}

}
printListOfScientists();


submitForm.addEventListener('click', function(event){
	event.preventDefault();

	const evilFullName: string = (document.querySelector("#fullname") as HTMLInputElement).value;
	const evilAge: number = (document.querySelector("#age") as HTMLInputElement).valueAsNumber
	const evilHenchmen: number = (document.querySelector("#henchmen") as HTMLInputElement).valueAsNumber
	const evilDesc: string = (document.querySelector("#desc") as HTMLInputElement).value

	const evilArr: Evils = {
		name: evilFullName,
		age: evilAge,
		henchmen: evilHenchmen,
		desc: evilDesc,
	}

	evilScientists.push(evilArr)
	printListOfScientists();
	
	const resetForm = document.querySelector('.form') as HTMLFormElement
	resetForm.reset();
})






