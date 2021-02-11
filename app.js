let layoutObject = JSON.parse(localStorage.getItem('layoutObj2'));


/*main page printing function*/

if (layoutObject != null && Object.keys(layoutObject).length == 15) {
    let a = (Object.entries(layoutObject))
    for (let i = 0; i < a.length; i++) {
        if (a[i][1][1] != "hide") {

            let aElement = document.createElement('a');

            let h2Element = document.createElement('h2');

            let pElement = document.createElement('p');

            h2Element.innerHTML = a[i][1][2];
            pElement.innerHTML = a[i][1][3];

            aElement.appendChild(h2Element);
            aElement.appendChild(pElement);

            aElement.classList = `${a[i][1][0]} area_${a[i][1][1]}`

            if (a[i][0] !== 'menu') {
                
                aElement.target = '_blank';
            } else {

                aElement.target = '_self';
            }

            aElement.rel = 'noreferrer';

            if (a[i][0] !== 'lukkarikone') {

                aElement.href = a[i][1][4]
            } else {

                aElement.addEventListener('click', goLukkari)
            }

            document.getElementById('bodyId').appendChild(aElement);
        }
    }

} else {

    /* if there is any changes or this is the first visit
    (the localStorage object can't be found) */

    /* any new icon can be added by using same pattern.
    in that case a css class in the main style.css 
    and select option in the menu/htlm needs to be created*/

    /* if the icon contains two color letters use span and add 
    different options to main style.css*/

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

    localStorage.setItem('layoutObj2', JSON.stringify(layoutList));
    location.reload();
}


let lukkariLink = JSON.parse(localStorage.getItem('lukkariLink'));

function goLukkari() {
    
    if (lukkariLink != null) {

        /* '_blank' attribute doesn't show 
        requested timetable on the opening page*/

        window.open(lukkariLink);
    } else {

        window.open('https://lukkarit.haaga-helia.fi/');
    }
}
