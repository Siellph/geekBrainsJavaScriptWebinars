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