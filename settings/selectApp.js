
let y = document.querySelectorAll('.optionSet');
y.forEach(element => {
    for (let i = 0; i < 9; i++) {
        let x = document.createElement('option');
        x.setAttribute('value', i);
        x.innerText = i;
        element.appendChild(x);
    }

});

let hideDiv = document.querySelectorAll('.hidingP');
hideDiv.forEach(eleme => {
    eleme.addEventListener('click', () => {
        eleme.nextElementSibling.classList.toggle('hide');
    })
})




/*
let hideDiv = document.querySelector('#displayDiv');
hideDiv.addEventListener('click', () => {
   document.querySelector('#optionsDiv').classList.toggle('hide');
})
*/