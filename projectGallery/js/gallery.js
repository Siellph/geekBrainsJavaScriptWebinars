let IMGS = [
    'https://live.staticflickr.com/584/31529850060_780a516a03_b.jpg', 
    'http://bizenglish.adaderana.lk/wp-content/uploads/japan-1.png',
    'https://avatars.mds.yandex.net/get-pdb/1881775/2183ac5a-9340-4c2f-bf11-70c397c0c03a/s1200?webp=false',
    'https://img1.goodfon.com/original/1680x1050/1/4f/yaponiya-stratovulkan-gora-3111.jpg',
    'https://jbc-travel.com/wp-content/uploads/2014/04/Japan-8.jpg',
    'https://wallbox.ru/wallpapers/main/201628/ad4ffa6a2b9e71b.jpg',
    'https://s1.1zoom.me/big3/80/Japan_Pond_Parks_Autumn_506278.jpg',
    'https://s1.1zoom.me/big3/87/Japan_Parks_Mountains_465556.jpg',
    'https://i.artfile.me/wallpaper/17-05-2014/2560x1600/koriyama-castle---yamatokoriyama--japan--828447.jpg'
    ]

let MAIN_PIC = document.getElementById ('MAIN-PIC')
let ROUL = document.getElementById ('roulette')

window.onload = function () {
    MAIN_PIC.src = IMGS [7]

    IMGS.forEach(el => {
        ROUL.insertAdjacentHTML ('beforeend', createItem(el).render())
    })
}

function createItem (item) {
    return {
        width: 150,
        height: 100,
        render: function () {
            return `
                <img 
                class="minPic"
                src="${item}" 
                width="${this.width}" 
                height="${this.height}">
            `
        }
    }
}

ROUL.addEventListener ('click', changeMain)

function changeMain (evt) {
    if (evt.target.tagName === 'IMG') {
        MAIN_PIC.src = evt.target.src
    }
    // console.dir (event.target)
    //MAIN_PIC.src = source
}