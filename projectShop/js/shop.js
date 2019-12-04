let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
let PRICES = [100, 120, 1000, 15, 18]
let IDS = [0, 1, 2, 3, 4]

let products = [] //массив объектов

let catalog = {
    items: [],
    construct() {
        this._init()
    },
    _init() {
        this._handleData()
    },
    _handleData() {
        for (let i = 0; i < IDS.length; i++) {
            this.items.push(this._createNewProduct(i))
        }
    },
    _createNewProduct(index) {
        return {
            product_name: PRODUCTS_NAMES[index],
            price: PRICES[index],
            product_id: [index]
        }
    }
}

let cart = {
    items: [],
    total: 0,
    addProduct (product) {
        let id = product
        let prod = catalog._createNewProduct (product)
        let find = this.items.find (product => product.product_id === id)
        if (find) {
            find.quantity++
        } else {
            prod.quantity = 1
            this.items.push(prod)
        }
    }
}