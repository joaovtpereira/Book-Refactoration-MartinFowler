// inversa de inline variable

function old_example(order) {
    return order.quantity * ordem.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 + 
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function new_example(order) {
    const basePrice = order.quantity * ordem.itemPrice
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const shipping = Math.min(basePrice * 0.1, 100)

    return basePrice - quantityDiscount + shipping       
}

class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity;}
    get itemPrice() {return this._data.itemPrice;}
    
    get old_price() {
        return this.quantity * this.itemPrice -
        Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 + 
        Math.min(this.quantity * this.itemPrice * 0.1, 100)
    }

    get new_price() {
        return this.basePrice -
        this.quantityDiscount + 
        this.shipping
    }

    get basePrice() {
        return this.quantity * this.itemPrice
    }

    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
    }

    get shipping() {
        return Math.min(this.basePrice * 0.1, 100)
    }
}