// inversa de inline function

function old_printOwing1(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();

    console.log(`name: ${invoice.costumer}`);
    console.log(`amount: ${outstanding}`);
}

function refactor_new_printOwing1(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();
    printDetails(outstanding);

    function printDetails() {
        console.log(`name: ${invoice.costumer}`);
        console.log(`amount: ${outstanding}`);
    }
}

function old_printOwing2(invoice) {
    let outstanding = 0;

    console.log("*********");
    console.log("***hello***");
    console.log("*********");
    
    // calcula valor a pagar
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // registra a data de vencimento (due date)
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    // exibe detalhes
    console.log(`name: ${invoice.costumer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function refactor_new_printOwing2(invoice) {

    printBanner();
    
    const outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice);

    printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.costumer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
    console.log("*********");
    console.log("***hello***");
    console.log("*********");
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}