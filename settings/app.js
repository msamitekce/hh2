
let optionSetCreation = document.querySelectorAll('.optionSet');
optionSetCreation.forEach(element => {
    for (let i = 0; i < 7; i++) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', i);
        if (i === 0) {
            optionElement.innerText = "None";
        } else {
            optionElement.innerText = i;
        }
        element.appendChild(optionElement);
    }
});

/* on click hiding and ui bug fixes*/
let hideDiv = document.querySelectorAll('.titleP');
hideDiv.forEach(divElement => {
    divElement.addEventListener('click', () => {
        let toHidden = divElement.nextElementSibling;
        if (toHidden.classList.contains('hide')) {
            toHidden.querySelectorAll('a, select, label, ol').forEach(oneLink => {
                oneLink.style.display = 'inline-block';
            })
            document.querySelectorAll('button, p, input').forEach(aButton => {
                aButton.style.display = 'block';
            })
            toHidden.classList.remove('hide');
            divElement.classList.add('hidingPTransition');
        } else {
            toHidden.querySelectorAll('a,select,label, p, button, input').forEach(oneLink => {

                oneLink.style.display = 'none';
            })
            toHidden.classList.add('hide');
            divElement.classList.remove('hidingPTransition');

        };
    })
})

/*Links*/

let allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.target = '_blank';
    link.rel = 'noreferrer';
})

document.querySelector('.goBack').querySelector('a').target = '_self';