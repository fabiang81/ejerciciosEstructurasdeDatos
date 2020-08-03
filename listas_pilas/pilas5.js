var list1 = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];

var pairList = [];
var oddList = [];

var counter=2;

function divide(){
    while(list1.length > 0){
        if(counter % 2 !== 0){
            pairList.push(list1.shift());
        }else{
            oddList.push(list1.shift());
        }
        counter++;
    }
}

divide();

console.log(pairList);
console.log(oddList);



