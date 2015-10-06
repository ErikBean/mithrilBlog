describe("tests", function () {
    var expect;
    beforeEach(function () {
        expect = window.chai.expect;
    });
    it("should have chai", function () {
        expect(expect).to.be.ok;
    });
});