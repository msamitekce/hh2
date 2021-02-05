let layout = JSON.parse(localStorage.getItem('layout'));




if (layout != null) {

    let a = (Object.entries(layout))
    for (let i = 0; i < a.length; i++) {
        let b = document.querySelector(`.${a[i][0]}`);
        b.setAttribute('class', a[i][0] + " area_" + a[i][1]);
    }
}