let initialArea = JSON.parse(localStorage.getItem('layoutObject'));
console.log(initialArea)


let optionSetCreation = document.querySelectorAll('.optionSet');
optionSetCreation.forEach(element => {
    createOptionList(element);
    if (element.id === 'menu') {
        document.querySelector('#menu').childNodes[1].setAttribute('disabled', true)
    }

});


function createOptionList(element) {
    for (let i = 0; i < 9; i++) {
        let optionElement = document.createElement('option');
        if (i === 0) {
            optionElement.innerText = "None";
            optionElement.setAttribute('value', 'hide');
        } else {
            optionElement.setAttribute('value', i);
            optionElement.innerText = i;
        }
        element.appendChild(optionElement);
    }
    console.log(element);
}

function setInitialOption(element){
    if(initialArea[element.id][1] === 'hide'){
        element.children[0].setAttribute('selected', true);
    }
}



/* on click hiding and ui bug fixes*/

let hiding = (e) => {
    let targetId = e.target;
    let changeClassList = targetId.nextElementSibling.classList;
    if (changeClassList.contains('hide')) {
        document.querySelectorAll('.contentDiv').forEach(x => {
            x.classList.add('hide');
        })
        changeClassList.remove('hide');
    } else {
        changeClassList.add('hide');
    }
}

let hideDiv = document.querySelectorAll('.titleP');
hideDiv.forEach(divElement => {
    divElement.addEventListener('click', hiding)
})


/*Links*/

let allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.target = '_blank';
    link.rel = 'noreferrer';
})

document.querySelector('.goBack').querySelector('a').target = '_self';

/* Set Layout Local Storage */

let layoutButton = document.querySelector('#layoutButton');
layoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    let itemLi = JSON.parse(localStorage.getItem('layoutObject'))
    let userSettings = document.querySelectorAll('.optionSet')
    userSettings.forEach(userSet => {
        itemLi[userSet.id][1] = userSet.value;
        console.log(itemLi[userSet.id][1]);
    })
    localStorage.setItem('layoutObject', JSON.stringify(itemLi))
})

/* Lukkarikone Link Setup*/

function addLukkariLink() {
    let lukkariLink = document.querySelector('#lukkariLink').value;
    localStorage.setItem('lukkariLink', JSON.stringify(lukkariLink));
}