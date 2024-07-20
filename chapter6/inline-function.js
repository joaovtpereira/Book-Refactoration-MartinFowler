// inversa de extrair funcao

function old_getRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}

function new_getRating(driver){
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}