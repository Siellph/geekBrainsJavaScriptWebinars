let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
let PRICES = [100, 120, 1000, 15, 18]
let IDS = [0, 1, 2, 3, 4]

// let products = [] //массив объектов

let catalog = {
    items: [],
    container: '.products',
    construct() {
        this._init()
    },
    _init() {
        this._handleData()
        this.render()
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
            product_id: IDS[index]
        }
    },

    render() {
        let str = ''
        this.items.forEach(item => {
            str += `
            <div class="product">
                <img src="https://placehold.it/300x200">
                <div class="prod">
                <b class="name">${item.product_name}</b>
                <i class="price">${item.price}</i>
                </div>
                <button class="buy">Купить</button>
            </div>
        `
        })
        document.querySelector(this.container).innerHTML = str
    }
}
let cart = {
    items: [],
    total: 0,
    sum: 0,
    addProduct(product) {
        let id = product
        let prod = catalog._createNewProduct(product)
        let find = this.items.find(product => product.product_id === id)
        if (find) {
            find.quantity++
        } else {
            prod.quantity = 1
            this.items.push(prod)
        }
        this._checkTotal()
    },
    deleteProduct(product) {
        
    },
    calculateSum() {

    },
    _checkTotal() {

    }
}
catalog.construct()