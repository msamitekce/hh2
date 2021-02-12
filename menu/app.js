let layoutObj = JSON.parse(localStorage.getItem('layoutObj2'));

let valuesArray = {};


/* append option list for each main layout option*/



function optionList() {

    let objKeys = Object.keys(layoutObj);

    const labelElement = document.createElement('label')
    const inputElement = document.createElement('select')

    objKeys.map(objEach => {
        const labelElement = document.createElement('label');
        const inputElement = document.createElement('select');

        labelElement.htmlFor = layoutObj[objEach][0];
        labelElement.innerHTML = layoutObj[objEach][3];

        inputElement.id = layoutObj[objEach][0];
        inputElement.name = layoutObj[objEach][0];
        inputElement.className = 'optionSet';

        crtOptList(inputElement);
        document.querySelector('.form').appendChild(labelElement);
        document.querySelector('.form').appendChild(inputElement);

        if (layoutObj[objEach][0] === 'menu') {

            document.querySelector('#menu').childNodes[1].setAttribute('disabled', true)
        }

    })




};


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

    if (layoutObj[opt.id][1] === 'hide') {

        opt.children[0].setAttribute('selected', true);
    } else {

        opt.children[layoutObj[opt.id][1]].setAttribute('selected', true)
    }
}

/* add change listener for each option
add current area value object then call check function for conflict*/

function optEventFunction() {


    let optSetElement = document.querySelectorAll('.optionSet');

    optSetElement.forEach(opt => {

        valuesArray[layoutObj[opt.id][0]] = layoutObj[opt.id][1];

        opt.addEventListener('change', anElmnt => {

            isSame(anElmnt)
        })
    })
};


/* checks conflicts by filtering unique area values 
then compares length*/



function isSame(anElmnt) {
    let copiedValuesArr = Object.assign({}, valuesArray);
    copiedValuesArr[anElmnt.target.id] = anElmnt.target.value;

    let filteredCpy = Object.values(copiedValuesArr).filter(x => x > 0);

    let uniqueCpy = [...new Set(Object.values(filteredCpy))];


    /* to block save button */

    if (uniqueCpy.length != filteredCpy.length) {

        layoutButton.disabled = true;
        layoutButton.style.background = '#b03636';
        layoutButton.style.cursor = 'auto'
        layoutButton.innerText = "Can't save"
    } else {

        layoutButton.disabled = false;
        layoutButton.style.background = '#000';
        layoutButton.style.cursor = 'pointer'
        layoutButton.innerText = "Save"
    }
}


/* menu title hiding */

let titleElement = document.querySelectorAll('.titleP');

function hideTitleFunction() {

    titleElement.forEach(divElement => {

        divElement.addEventListener('click', hideTitle)
    })
};

/* 'hide' class has display:none */

function hideTitle(e) {

    let targetClass = e.target.nextElementSibling.classList;

    if (targetClass.contains('hide')) {

        document.querySelectorAll('.contentDiv').forEach(x => {

            x.classList.add('hide');
        })

        targetClass.remove('hide');
    } else {

        targetClass.add('hide');
    }
}


/* links target settings */

function linkFunction() {

    let linkElements = document.querySelectorAll('a');

    linkElements.forEach(link => {

        link.target = '_blank';
        link.rel = 'noreferrer';
    })

    document.querySelector('.goBack').querySelector('a').target = '_self';
};



/* layout save */

function layoutSaveFunction() {

    let layoutButton = document.querySelector('#layoutButton');
    let optSetElement = document.querySelectorAll('.optionSet');
    layoutButton.addEventListener('click', (e) => {

        e.preventDefault();

        optSetElement.forEach(opt => {

            layoutObj[opt.id][1] = opt.value;
        })

        localStorage.setItem('layoutObj2', JSON.stringify(layoutObj));

        successTransition(layoutButton);
    })
};


/* lukkarikone link save*/

function linksaveFunction() {
    let lukkariInput = document.querySelector('#lukkariLink');

    lukkariInput.nextElementSibling.addEventListener('click', () => {
        if (lukkariInput.value != "") {

            localStorage.setItem('lukkariLink', JSON.stringify(lukkariLink.value));

            successTransition(document.querySelector('#lukkariLink').nextElementSibling);

            setTimeout(() => {

                document.querySelector('#lukkariLink').value = "";
            },
                800);
        }
    })
};


/* visual feedback after successful save */

function successTransition(btn) {

    let btnBgClr = btn.style.backgroundColor;

    btn.innerText = 'Saved'
    btn.style.backgroundColor = '#0b680b'

    setTimeout(() => {

        btn.innerText = 'Save'
        btn.style.backgroundColor = btnBgClr;
    }
        , 800);
}


optionList();
optEventFunction();
hideTitleFunction();
layoutSaveFunction();
linksaveFunction();
linkFunction()
