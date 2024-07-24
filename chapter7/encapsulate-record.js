const organization = {name: "joao", country: "BR"}

const result = `<h1>${organization.name}</h1>`

organization.name = newName;

//to 

function getRawDataOfOrganization() {
    return organization;
}

const first_new_result = `<h1>${getRawDataOfOrganization().name}</h1>`
getRawDataOfOrganization().name = newName;

// to 2

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    set name(aString) {
        this._name = aString;
    }

    get name(){
        return this._name
    }

    set country(aCountryCode) {
        this._country = aCountryCode;
    }

    get country(){
        return this._country
    }
}

const new_organization = new Organization({name: "joao", country: "BR"})


function getOrganizaton() {
    return new_organization;
}

getOrganizaton().name = newName;

const second_new_result = `<h1>${getOrganizaton().name}</h1>`