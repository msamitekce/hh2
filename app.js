let layout = JSON.parse(localStorage.getItem('layout'));
let lukkariLink = JSON.parse(localStorage.getItem('lukkariLink'))


if (layout != null) {

    let a = (Object.entries(layout))
    for (let i = 0; i < a.length; i++) {
        let b = document.querySelector(`.${a[i][0]}`);
        b.setAttribute('class', a[i][0] + " area_" + a[i][1]);
    }

}


function goLukkari(){
    if(lukkariLink != null){
        window.open(lukkariLink);
    } else {
        window.open('https://lukkarit.haaga-helia.fi/');
    }
}
