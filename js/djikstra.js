var Djikstra = function () {


    function computePaths(sourceNode) {

        sourceNode.minDistance = 0;

        var nodeQueue = [];     // Queue of nodes
        nodeQueue.push(sourceNode);

        var visitedNodes = [];  // Contains visited nodes

        // While the nodeQueue is not empty
        while (nodeQueue.length > 0) {
            var u = nodeQueue[nodeQueue.length - 1];

            console.log("");
            console.log("Visiting node " + u);
            console.log("");

            // Loop through all the neighbours of u
            u.neighbours.forEach(function (entry) {

                if (visitedNodes.indexOf(entry.target) == -1) {
                    var v = entry.target;
                    console.log("Checking connection: " + u + " - " + v);

                    var weight = e.weight;
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
                    console.log("Node " + e.target + " already visited!");
                    console.log("");
                }

            });
            visitedNodes.push(u);


        }


    }


    return {};
};