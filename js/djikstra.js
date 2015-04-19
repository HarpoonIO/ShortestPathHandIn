var Djikstra = function () {


    function computePaths(sourceNode) {

        sourceNode.minDistance = 0;

        var nodeQueue = [];     // Queue of nodes
        nodeQueue.push(sourceNode);

        var visitedNodes = [];  // Contains visited nodes

        // While the nodeQueue is not empty
        while (nodeQueue.length > 0) {
            var u = nodeQueue[nodeQueue.length - 1];

            // removes u from nodeQueue
            var index = nodeQueue.indexOf(u);
            nodeQueue.splice(index, 1);

            console.log("");
            console.log("Visiting node: " + u);
            console.log("");

            // Loop through all the neighbours of u
            u.neighbours.forEach(function (entry) {

                if (visitedNodes.indexOf(entry.target) == -1) {
                    var v = entry.target;
                    console.log("Checking connection: " + u + " - " + v);

                    var weight = entry.weight;
                    console.log("Weight: " + weight);

                    var distanceThroughU = 0;
                    console.log("Distance through " + u + " = " + distanceThroughU);

                    console.log("");

                    if (distanceThroughU < v.minDistance) {

                        console.log("Smaller distance found to " + v);
                        var index = nodeQueue.indexOf(v);
                        nodeQueue.splice(index, 1);

                        console.log("Previous distance: " + v.minDistance);
                        v.minDistance = distanceThroughU;
                        console.log("New distance: " + v.minDistance);

                        console.log("Previous route " + v.previousNode);
                        v.previousNode = u;
                        console.log("New route " + v.previousNode);

                        console.log("Adding " + v + " to queue");
                        nodeQueue.push(v);
                        console.log("");
                    }
                } else {
                    console.log("Node " + entry.target + " already visited!");
                    console.log("");
                }

            });
            visitedNodes.push(u);
        }

    }

    // Now we backtrack to find the shortest path of nodes
    function getShortestPath(targetNode) {
        var path = [];

        while (targetNode.previousNode) {
            path.push(targetNode.previousNode);
            targetNode = targetNode.previousNode;
        }

        return path.reverse();
    }

    function simulate() {

        // Setup the nodes
        var nodes = [];
        for(var i = 1; i < 7; i++){
            nodes.push(new Node("" + i));
        }

        // Connect the nodes
        nodes[0].neighbours = [
            new Edge(nodes[1], 7),
            new Edge(nodes[2], 9),
            new Edge(nodes[5], 14)
        ];
        nodes[1].neighbours = [
            new Edge(nodes[0], 7),
            new Edge(nodes[2], 10),
            new Edge(nodes[3], 15)
        ];
        nodes[2].neighbours = [
            new Edge(nodes[0], 9),
            new Edge(nodes[1], 10),
            new Edge(nodes[3], 11),
            new Edge(nodes[5], 2)
        ];
        nodes[3].neighbours = [
            new Edge(nodes[1], 15),
            new Edge(nodes[2], 11),
            new Edge(nodes[4], 6)
        ];
        nodes[4].neighbours = [
            new Edge(nodes[3], 6),
            new Edge(nodes[5], 9)
        ];
        nodes[5].neighbours = [
            new Edge(nodes[0], 14),
            new Edge(nodes[2], 2),
            new Edge(nodes[4], 9)
        ];

        // Find the shortest path through nodes
        computePaths(nodes[0]);

        // Print the result
        console.log("Distance to " + nodes[4] + ": " + nodes[4].minDistance);
        var shortestPath = getShortestPath(nodes[4]);
        console.log("Shortest path: " + shortestPath);
    }

    return {
        computePaths: computePaths,
        getShortestPath: getShortestPath,
        simulate: simulate
    };
};
































