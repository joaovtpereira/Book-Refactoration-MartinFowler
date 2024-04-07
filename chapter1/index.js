
const plays = require('./plays.json');
const invoices = require('./invoices.json');


function statement (invoice) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;

    const format = new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }
    ).format;

    for (let perf of invoice.performances) {
        volumeCredits+= Math.max(perf.audience - 30, 0);
        if("comedy" === playFor(perf).type)
            volumeCredits += Math.floor(perf.audience / 5);

        result += `${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience} seats)\n`;
        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}

function amountFor(aPerfomance) {
    let result = 0;
    switch (playFor(aPerfomance).type) {
        case "tragedy":
            result = 40000;

            if(aPerfomance.audience > 30) {
                result += 1000 * (aPerfomance.audience - 30)
            }
            break;

        case "comedy": 
            result = 30000;
            if(aPerfomance.audience > 20) {
                result += 10000 + 500 * (aPerfomance.audience - 20)
            }
            break;

        default: 
            throw new Error("tipo nao reconhecido")
    }

    return result;
}

function playFor(aPerfomance) {
    return plays[aPerfomance.playID]
}

console.log(statement(invoices[0]))