"use strict";
const evilScientistList = document.querySelector(".evil-scientist-list");
const cardShow = document.querySelector(".card-show");
const formData = document.querySelector(".form-data");
const submitForm = document.querySelector("#submit-form");
const evilScientists = [
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
];
function printListOfScientists() {
    evilScientistList.innerHTML = '';
    let evilScientistsLength = evilScientists.length;
    for (let i = 0; i < evilScientistsLength; i++) {
        let divElem = document.createElement('div');
        let h2Elem = document.createElement('h2');
        divElem.className = "card";
        h2Elem.className = "evil-name";
        h2Elem.innerHTML = `${evilScientists[i].name}`;
        evilScientistList.append(divElem);
        divElem.append(h2Elem);
        h2Elem.addEventListener("click", (event) => {
            event.preventDefault();
            cardShow.innerHTML = "";
            let pickedEvil = h2Elem.innerText;
            let evilArray = [];
            const choosenEvil = evilScientists.find(evil => evil.name === pickedEvil);
            for (const [key, value] of Object.entries(choosenEvil)) {
                let evilString = '';
                evilString += key + ': ' + value;
                evilArray.push(evilString);
            }
            let prettyArray = evilArray.map(letter => letter.charAt(0).toUpperCase() + letter.substring(1));
            prettyArray.forEach(element => {
                const listElement = document.createElement('li');
                const ulElement = document.createElement('ul');
                listElement.innerHTML = element;
                ulElement.append(listElement);
                cardShow.append(ulElement);
            });
        });
    }
}
printListOfScientists();
submitForm.addEventListener('click', function (event) {
    event.preventDefault();
    const evilFullName = document.querySelector("#fullname").value;
    const evilAge = document.querySelector("#age").valueAsNumber;
    const evilHenchmen = document.querySelector("#henchmen").valueAsNumber;
    const evilDesc = document.querySelector("#desc").value;
    const evilArr = {
        name: evilFullName,
        age: evilAge,
        henchmen: evilHenchmen,
        desc: evilDesc,
    };
    evilScientists.push(evilArr);
    printListOfScientists();
    const resetForm = document.querySelector('.form');
    resetForm.reset();
});
