const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
// 地图关系
const roadGraph = buildGraph(roads);

class Robot{
    constructor(place, packages=[]){
        this.place = place;
        this.packages = packages;
        this.step = 0;
        this.next_direction = 0;
        this.mailRoute = [];
    }
    move(){
        let destination = this.choiceDest(this.next_direction).direction;

        if(!roadGraph[this.place].includes(destination)){
            console.log("can't arrive!")
            return false;
        }else{
            console.log("robot: move to destination " + destination);
            this.step++;
            this.receiptPackage(destination);
            this.putPackage(destination);
            this.place = destination;
            this.next_direction++;
        }
    }
    receiptPackage(destination){
        this.packages = this.packages.map(item => {
            if(item.place === destination && !item.beReceipt){
                item.beReceipt = true;
                console.log(`robot: receipt package from ${destination}.Prepare to send to ${item.address}`);
            }
            return item;
        })
    }
    putPackage(destination){
        this.packages = this.packages.filter(item => {
            if(item.address === destination && item.beReceipt){
                console.log(`robot: put package to ${destination}`);
                return false;
            }else{
                return true;
            }
        })
    }
    choiceDest(next_direction){
        if(next_direction >= this.mailRoute.length){
            let dest = this.packages[0].beReceipt ? this.packages[0].address : this.packages[0].place;
            this.mailRoute = Robot.findRoute(roadGraph, this.place, dest);
            this.next_direction = 0;
            next_direction = 0;
        }
        return {direction: this.mailRoute[next_direction]};
    }
    static findRoute(graph, from, to) {
        let work = [
            {
                at: from, 
                route: []
            }
        ];
        for (let i = 0; i < work.length; i++) {
            let { at, route } = work[i];
            for (let place of graph[at]) {
                if (place == to) return route.concat(place);
                if (!work.some(w => w.at == place)) {
                    work.push({at: place, route: route.concat(place)});
                }
            }
        }
    }
    static runRobot(){
        let packages = Package.random(40);
        let robot = new Robot("Post Office", packages);
        console.log(packages);
        while(robot.packages.length){
            robot.move(robot.choiceDest().direction);
        }
        console.log("all package have been put.");
        console.log(`robot took ${robot.step} step.`)
    }
}

class Package{
    constructor(place, address){
        this.place = place;
        this.address = address;
        this.beReceipt = false;
    }
    static random(Count=5){
        let packages = [];
        for (let i = 0; i < Count; i++) {
            let address = Package.randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = Package.randomPick(Object.keys(roadGraph));
            } while (place == address);
            packages.push(new Package(place, address));
        }
        return packages;
    }
    static randomPick(array) {
        let choice = Math.floor(Math.random() * array.length);
        return array[choice];
    }
}


Robot.runRobot();