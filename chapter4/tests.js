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
})