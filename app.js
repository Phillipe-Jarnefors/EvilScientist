var evilScientistList = document.querySelector(".evil-scientist-list");
var updateList = document.querySelector(".update-list");
var cardShow = document.querySelector(".card-show");
updateList.addEventListener("click", function (event) {
    printListOfScientists();
});
var evilScientists = [
    {
        name: "Klaus Benedict",
        age: 50,
        henchmen: 12,
        desc: "Built Frankensteins Monster more advanced"
    },
    {
        name: "Wilhelm Will",
        age: 40,
        henchmen: 0,
        desc: "Lone Wolf"
    },
    {
        name: "Pingis Khan",
        age: 60,
        henchmen: 100,
        desc: "Wish to rule the world"
    },
];
// ==== Show List of Evil ====
function printListOfScientists() {
    evilScientistList.innerHTML = '';
    var evilScientistsLength = evilScientists.length;
    var _loop_1 = function (i) {
        var divElem = document.createElement('div');
        var h2Elem = document.createElement('h2');
        divElem.className = "card";
        h2Elem.className = "evil-name";
        h2Elem.innerHTML = "".concat(evilScientists[i].name);
        evilScientistList.append(divElem);
        divElem.append(h2Elem);
        h2Elem.addEventListener("click", function (event) {
            event.preventDefault();
            cardShow.innerHTML = "";
            var pickedEvil = h2Elem.innerText;
            var choosenEvil = evilScientists.find(function (evil) { return evil.name === pickedEvil; });
            console.log(choosenEvil);
            console.log(evilScientists[i].name);
            var evilArray = [];
            for (var _i = 0, _a = Object.entries(choosenEvil); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                var evilString = '';
                evilString += key + ': ' + value;
                evilArray.push(evilString);
            }
            var prettyArray = evilArray.map(function (letter) { return letter.charAt(0).toUpperCase() + letter.substring(1); });
            console.log(prettyArray);
            prettyArray.forEach(function (element) {
                var listElement = document.createElement('li');
                var ulElement = document.createElement('ul');
                listElement.innerHTML = element;
                ulElement.append(listElement);
                cardShow.append(ulElement);
            });
        });
    };
    for (var i = 0; i < evilScientistsLength; i++) {
        _loop_1(i);
    }
}
printListOfScientists();
// ==== Show Info about the Evil Scientist ====
// function displayChoosenEvil(): void {
// }
// for (let j = 0; j < evilScientistsLength; j++) {
// 	discoverBtn[j].addEventListener('click', function() :void {
// 		cardShow.innerHTML = "";
// 		for(let [key, value] of Object.entries(evilScientists[j])) {
// 			let unorderList = document.createElement('ul') as HTMLElement
// 			let listElement = document.createElement('li') as HTMLElement
// 			cardShow.append(unorderList)
// 			listElement.innerHTML = [`${key}: ${value}`]
// 		}
// 	})
// }
