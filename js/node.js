var Node = function (_argName) {
    var neighbours = [];    // Collection of neighboring nodes, will be edges
    var name = _argName;
    var minDistance = Infinity; // TODO: change this at some point
    var previousNode;

    function compareTo(otherNode) {
        if (minDistance > otherNode.minDistance) {
            return 1;
        } else if (minDistance < otherNode.minDistance) {
            return -1;
        } else {
            return 0;
        }
    }

    function toString() {
        return name;
    }

    return {
        toString: toString,
        compareTo: compareTo,
        neighbours: neighbours,
        minDistance: minDistance,
        previousNode: previousNode,
        name: name
    };
};