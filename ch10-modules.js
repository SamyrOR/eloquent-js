// * 10.1 A modular robot
/* 
export class Graph {
    buildGraph(array){
        return graph
    }
}
import {Graph} from './graph'
export class State {
    construct(roads) {
        this.roads = roads
    }
    roadGraph() {
        return graph.BuildGraph(roads)
    }

    mailRout() {
        ..code
    }

    private findRout () {
        ..code
    }
} 

import {State} from './state'
export class Robot {
    runRobot(state) {
        ..code
    }
}

import {Robot} from './robot'
export class GoalOrientedRobot extends Robot {

}


import {Robot} from './robot'
export class RandomRobot extends Robot {

}
*/

//* 10.2 Roads module
// Add dependencies and exports
const graph = require("./graph");
exports.roadGraph = graph.buildGraph(
  roads.map((road) => (road = road.split("-")))
);
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];
