
let optionSetCreation = document.querySelectorAll('.optionSet');
optionSetCreation.forEach(element => {
    for (let i = 0; i < 7; i++) {
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
});

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
layoutButton.addEventListener('click', () => {

    let layoutOrder = {};
    document.querySelectorAll('.optionSet').forEach(options => {
        layoutOrder[options.id] = options.value;
    })

    localStorage.setItem('layout', JSON.stringify(layoutOrder));
    console.log(JSON.stringify(layoutOrder));
})
