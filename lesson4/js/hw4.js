//Задание 1
function preNum(a) {
    if (a > 999) {
        console.log('Ожидалось трехзначное число')
    } else {
        let num = {
            единицы: Math.floor((a / 1) % 10),
            десятки: Math.floor((a / 10) % 10),
            сотни: Math.floor((a / 100) % 10)
        }
        console.log(num)
    }
}
//Задание 2
let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
let PRICES = [100, 120, 1000, 15, 18]
let IDS = [0, 1, 2, 3, 4]

let products = [] //массив объектов
let cart = {
    items: [],
    total: 0
}

function getData() {
    for (let i = 0; i < IDS.length; i++) {
        products.push(createNewPrduct(i))
    }
}

function createNewProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        product_id: [index]
    }
}

function addProduct() {
    let find = products.find(el.product_id === id)
    cart.items.push(Object.assign({}, find, {quantity: 1}))
}