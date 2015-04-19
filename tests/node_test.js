describe("a node", function () {

    var node;

    beforeEach(function () {
        node = new Node("name on node");
    });

    it("should be defined", function () {
        console.log("Should be defined");
        expect(node).toBeDefined();
    });


});