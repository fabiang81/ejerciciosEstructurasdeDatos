var stack1 = [];
var stack2 = [];

stack1.push("Id1");
stack1.push("Id2");
stack1.push("Id3");
stack1.push("Id4");
stack1.push("Id5");
stack1.push("Id6");

Array.prototype.peek = function(){
    if (this.length === 0) {
        return false;
    }
    return this[this.length - 1];
}

function withdraw(containerId){
    while(stack1.peek() !== false){
        if(stack1.peek() === containerId){
            stack1.pop();
        }else{
            stack2.push(stack1.pop());
        }
    }

    while(stack2.peek() !== false){
        stack1.push(stack2.pop());
    }
    return stack1;
}

console.log(withdraw("Id5"));
