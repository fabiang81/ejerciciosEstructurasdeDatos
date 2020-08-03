var route = ["Pueblo Origen", "Pueblo1", "Pueblo2", "Destino"];
var route2 = ["Pueblo Origen", "Pueblo1", "Pueblo2", "Destino"];

function travelTo(route){
    while(route.length > 0){
        console.log(route.shift());
    }
}

function travelFrom(route){
    while(route.length > 0){
        console.log(route.pop());
    }
}

travelTo(route);
travelFrom(route2);
