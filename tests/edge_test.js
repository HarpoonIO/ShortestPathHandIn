describe("an edge", function () {

    var edge, node, testWeight;

    beforeEach(function () {
        node = new Node("testName");
        testWeight = 7;
        edge = new Edge(node, 7);
    });

    it("should be defined", function(){
        expect(node).toBeDefined();
        expect(edge).toBeDefined();
    });

    it("should have the same target", function(){
        expect(edge.weight).toEqual(testWeight);
    });

    it("should have the same node", function(){
        expect(edge.target).toEqual(node);
    });

});