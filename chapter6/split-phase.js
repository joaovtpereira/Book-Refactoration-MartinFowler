const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]]
const orderPrice = parseInt(orderData[1]) * productPrice;


// to 

const orderRecord = parseOrder(order);
const new_orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
    const values = aString.split(/\s+/);
    return ({
        productId: values[0].split("-")[1],
        quantity: parseInt(values[1])
    })
}

function price(order, priceList) {
    return order.quantity * priceList[order.productId]
}