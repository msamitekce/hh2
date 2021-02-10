let initSet = JSON.parse(localStorage.getItem('layoutObj'));
let valuesArray = {};
let sameValuesArray = {};


/* append option list for each main layout option*/

let optSetElement = document.querySelectorAll('.optionSet');
optSetElement.forEach(opt => {
    crtOptList(opt);
    if (opt.id === 'menu') {
        document.querySelector('#menu').childNodes[1].setAttribute('disabled', true)
    }

});


/* create the option list to be appended
number of options is hard coded based on main layout grid*/

function crtOptList(opt) {
    for (let i = 0; i < 9; i++) {
        let optElement = document.createElement('option');
        if (i === 0) {
            optElement.innerText = "None";
            optElement.setAttribute('value', 'hide');
        } else {
            optElement.setAttribute('value', i);
            optElement.innerText = i;
        }
        opt.appendChild(optElement);
    }
    setInitOpt(opt);
}

/* gets each option's from layoutObj
and displays saved layout area on option list  */

function setInitOpt(opt) {
    if (initSet[opt.id][1] === 'hide') {
        opt.children[0].setAttribute('selected', true);
    } else {
        opt.children[initSet[opt.id][1]].setAttribute('selected', true)
    }



    valuesArray[initSet[opt.id][0]] = initSet[opt.id][1];
}

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
    let itemLi = JSON.parse(localStorage.getItem('layoutObj'))
    let userSettings = document.querySelectorAll('.optionSet')
    userSettings.forEach(userSet => {
        itemLi[userSet.id][1] = userSet.value;
    })
    localStorage.setItem('layoutObj', JSON.stringify(itemLi));
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

    } else {
        document.querySelector('#lukkariLink').nextElementSibling.disabled = true;
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

