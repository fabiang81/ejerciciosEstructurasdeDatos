var myStack = [];

myStack.push(3);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.push(1);
myStack.push(2);
myStack.push(5);
myStack.push(5);

Array.prototype.peek = function(){
    if (this.length === 0) {
        return false;
    }
    return this[this.length - 1];
}

function replace(stack, number1, number2){
    while(stack.length > 0){
        if(stack.peek() !== number2){
            stack.pop();
        }else{
            stack.pop();
            stack.push(number1);
            break;
        }
    }
    console.log(stack);
}

replace(myStack, 7, 2);
