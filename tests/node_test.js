describe("a node", function () {

    var node;
    // Params for node
    var nameOnNode = "nodeName";

    beforeEach(function () {
        node = new Node(nameOnNode);
    });

    it("should be defined", function () {
        expect(node).toBeDefined();
    });

    it("should have the same name", function () {
        expect(node.name).toEqual(nameOnNode);
    });

    it("should have neighbours", function () {

        var neighbourTest = [
            new Edge(new Node("test1"), 7),
            new Edge(new Node("test2"), 9),
            new Edge(new Node("test3"), 14)
        ];
        node.neighbours = neighbourTest;

        expect(typeof node.neighbours).toBe('object');
        expect(node.neighbours.length).toBe(neighbourTest.length);
        expect(node.neighbours).toEqual(neighbourTest);
    });

});