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
    constructor(place, packages){
        this.place = place;
        this.packages = packages;
    }
    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else{
            console.log("robot: move to destination " + destination);
            let packages =  this.receiptPackage(this.packages, destination);
            packages = this.putPackage(packages, destination);
            return new Robot(destination, packages);
        }
    }
    receiptPackage(packages, destination){
        return packages.map(item => {
            if(item.place === destination){
                item.beReceipt = true;
                console.log("robot: receipt package from " + destination);
            }
            return item;
        })
    }
    putPackage(packages, destination){
        return packages.filter(item => {
            if(item.address !== destination){
                return true;
            }else{
                console.log("robot: put package to " + destination);
                return false;
            }
        })
    }
}

class Package{
    constructor(place, address){
        this.place = place;
        this.address = address;
        this.beReceipt = false;
    }
}

Package.random = function(Count = 5){
    let packages = [];
    for (let i = 0; i < Count; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        packages.push(new Package(place, address));
    }
    return packages;
}

// 随机选择
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}