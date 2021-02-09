let initialArea = JSON.parse(localStorage.getItem('layoutObject'));

let valuesArray = {};
let sameValuesArray = {};

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
    setInitialOption(element);
}

function setInitialOption(element) {
    if (initialArea[element.id][1] === 'hide') {
        element.children[0].setAttribute('selected', true);
    } else {
        element.children[initialArea[element.id][1]].setAttribute('selected', true)
    }

    valuesArray[initialArea[element.id][0]] = initialArea[element.id][1];
}
/* valuesArray.push(initialArea[element.id][1]); */

/* Same area controller */
function isSame() {
    let optionSet = document.querySelectorAll('.optionSet');
    optionSet.forEach(w => {
        w.addEventListener('change', e => sameControl(e))

    })
}
isSame();
let copiedValuesArr = Object.assign({}, valuesArray);
function sameControl(e) {
    let filteredAr = Object.values(valuesArray).filter(ele => ele > 0);
    copiedValuesArr[e.target.id] = e.target.value;
    let filteredCop = Object.values(copiedValuesArr).filter(ele => ele > 0);
    let unique = [...new Set(Object.values(copiedValuesArr))];
    let filterUn = unique.filter(elem => elem > 0);
    if (filterUn.length != filteredCop.length) {
        layoutButton.style.background = '#b03636';
        layoutButton.innerText = "Can't save"
        layoutButton.disabled = true;
        layoutButton.style.cursor = 'auto'
    } else {
        layoutButton.innerText = "Save"
        layoutButton.style.background = '#000';
        layoutButton.disabled = false;
        layoutButton.style.cursor = 'pointer'
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
    })
    localStorage.setItem('layoutObject', JSON.stringify(itemLi));
    toastMsg(layoutButton);
})

/* Lukkarikone Link Setup*/

function addLukkariLink() {
    let lukkariLink = document.querySelector('#lukkariLink').value;
    if (lukkariLink != "") {
        localStorage.setItem('lukkariLink', JSON.stringify(lukkariLink));
        toastMsg(document.querySelector('#lukkariLink').nextElementSibling);
        setTimeout(() => {
            document.querySelector('#lukkariLink').value = "";
        }
            , 600);

    }
}

function toastMsg(btn) {
    let btnBgClr = btn.style.backgroundColor;
    btn.innerText = 'Saved'
    btn.style.backgroundColor = '#0b680b'

    setTimeout(() => {
        btn.innerText = 'Save'
        btn.style.backgroundColor = btnBgClr;
    }
        , 800);
}

