// testes usando o framework mocha
// o asset é fruto de uma biblioteca chamada Chai

describe('province', function() {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData())
    });
    it('shortfall', function() {
        assert.equal(asia.shortfall, 5);
    })
    it("profit", function() {
        expect(asia.profit).equal(230);
    })
    if('change production', function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    })
    it("zero demand", function() {
        asia.demand = 0;
        expect(asia.shortfall).equal(-25);
        expect(asia.profit).equal(0);    
    })
    it("negative demand", function() {
        asia.demand = -1;
        expect(asia.shortfall).equal(-26);
        expect(asia.profit).equal(-10);    
    })
    it("empty string demand", function() {
        asia.demand = "";
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;    
    })
})

describe('no producers', function() {
    let noProducers;
    beforeEach(function() {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        }
        noProducers = new Province(data);
    });
    it("shortfall", function() {
        expect(noProducers.shortfall).equal(30)
    })
    it("profit", function() {
        expect(noProducers.profit.equal(0));
    })
})

describe("string for producers", function() {
    it("", function() {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price: 20
        }
        const prov = new Province(data);
        expect(prov.shortfall).equal(0);
    })
})