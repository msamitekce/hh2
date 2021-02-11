let layoutObject = JSON.parse(localStorage.getItem('layoutObj'));
let lukkariLink = JSON.parse(localStorage.getItem('lukkariLink'));

if (layoutObject != null && Object.keys(layoutObject).length == 15) {
    let a = (Object.entries(layoutObject))
    for (let i = 0; i < a.length; i++) {
        if (a[i][1][1] != "hide") {
            let elem = document.createElement('a');
            let elem2 = document.createElement('h2');
            let elem3 = document.createElement('p');
            elem2.innerHTML = a[i][1][2];
            elem3.innerHTML = a[i][1][3];
            elem.appendChild(elem2);
            elem.appendChild(elem3);
            elem.classList = `${a[i][1][0]} area_${a[i][1][1]}`
            if (a[i][0] !== 'menu') {
                elem.target = '_blank';
            } else {
                elem.target = '_self';
            }

            elem.rel = 'noreferrer';
            if (a[i][0] !== 'lukkarikone') {
                elem.href = a[i][1][4]
            } else {
                elem.addEventListener('click', goLukkari)
            }
            document.getElementById('bodyId').appendChild(elem);
        }
    }

} else {
    let layoutList = {
        calendar: ['calendar', 'hide', 'C', 'Calendar', 'https://outlook.office.com/calendar/view/month'],
        haaga_helia: ['haaga_helia', 'hide', '<span class="span3">H</span><span class="span4">H</span>', 'Haaga-Helia', 'https://www.haaga-helia.fi/en'],
        hhfinna: ['hhfinna', 'hide', 'F', 'HH&nbsp;Finna', 'https://haaga-helia.finna.fi/'],
        helga: ['helga', 'hide', 'H', 'HELGA', 'https://helga.fi/en/'],
        jobteaser: ['jobteaser', 'hide', 'J', 'JobTeaser', 'https://haaga-helia.jobteaser.com/en/'],
        kide: ['kide', 'hide', 'K', 'Kide.app', 'https://kide.app/'],
        lukkarikone: ['lukkarikone', 'hide', 'L', 'Lukkarikone', ''],
        menu: ['menu', '1', '...', 'Menu', '/menu'],
        moodle: ['moodle', 'hide', 'M', 'Moodle', 'https://hhmoodle.haaga-helia.fi/?userLang=en'],
        mynet: ['mynet', 'hide', '<span class="span1">M</span><span class="span2">y</span>', 'MyNet', 'https://student.home.haaga-helia.fi/'],
        outlook: ['outlook', 'hide', 'O', 'Outlook', 'http://mymail.haaga-helia.fi/'],
        guide: ['guide', 'hide', 'SG', 'Student Guide', 'https://opinto-opas.haaga-helia.fi/en'],
        rovius: ['rovius', 'hide', 'R', 'Rovius', 'https://vdi-lab.cp.haaga-helia.fi/client/'],
        vdi: ['vdi', 'hide', 'V', 'VDI', 'https://vdi.haaga-helia.fi/'],
        viope: ['viope', 'hide', 'V', 'Viope', 'https://www.viope.com/'],
    }
    localStorage.setItem('layoutObj', JSON.stringify(layoutList));
    location.reload();
}


function goLukkari() {
    if (lukkariLink != null) {
        window.open(lukkariLink);
    } else {
        window.open('https://lukkarit.haaga-helia.fi/');
    }
}
