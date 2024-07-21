let old_defaultOwner = {firstName: "Joao", lastName: "Pereira"}

spaceship.owner = old_defaultOwner;
old_defaultOwner = {firstName: "Myllena", lastName: "Souza"}

// apos aplicar encapsular

let new_defaultOwner = {firstName: "Joao", lastName: "Pereira"}

function getDefaultOwner() {
    return new_defaultOwner;
}

function setDefaultOwner(arg) {
    new_defaultOwner = arg;
}

spaceship.owner = getDefaultOwner();

setDefaultOwner({firstName: "Myllena", lastName: "Souza"});

// aplicando encapsular Registro

let new_2_defaultOwner = {firstName: "Joao", lastName: "Pereira"}

function defaultOwner2() {
    return new Person(new_2_defaultOwner);
}

function setDefaultOwner2(arg) {
    new_2_defaultOwner = arg;
}

class Person {
    constructor (data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }

    get lastName() {
        return this._lastName
    }

    get firstName() {
        return this._firstName
    }
}