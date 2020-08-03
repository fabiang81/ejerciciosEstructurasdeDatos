var myStack = [];

myStack.push("Manzana");
myStack.push("Cebolla");
myStack.push("Apio");
myStack.push("Naranja");
myStack.push("Papaya");
myStack.push("Sandía");
myStack.push("Melon");

function extract(stack, number){
    if(number <= stack.length){
        for(i=0; i < number; i++){
            stack.pop();
        }
        console.log(stack);
    }else{
        console.log("El número no debería exceder el tamaño de la lista");
    }
}

extract(myStack, 5);

