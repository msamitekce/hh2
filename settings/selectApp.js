
let y = document.querySelectorAll('.optionSet');
y.forEach(element => {
    for (let i = 0; i < 7; i++) {
        let x = document.createElement('option');
        x.setAttribute('value', i);
        if (i === 0) {
            x.innerText = "None";
        } else {
            x.innerText = i;
        }
        element.appendChild(x);
    }

});

let hideDiv = document.querySelectorAll('.hidingP');
hideDiv.forEach(eleme => {
    eleme.addEventListener('click', () => {
        eleme.nextElementSibling.classList.toggle('hide');
    })
})

