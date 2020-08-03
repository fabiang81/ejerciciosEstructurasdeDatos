class Node {

    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

class Tree {

    constructor(){
        this.root =null;
    }

    add(value){
        if(this.root === null){
            this.root = new Node(value, null, null);
            return;
        }
        var currentNode = this.root;
        while(true){
            if(value < currentNode.value){//goes to the left
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = new Node(value, null, null);
                    return;
                }
            }else{//goes to the right
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = new Node(value, null, null);
                    return;
                }
            }
        }
    }

    contains(value){
        var currentNode = this.root;
        while(currentNode !== null){
            if(value === currentNode.value){
                return true;
            }else{
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                }else{
                    currentNode = currentNode.right;
                }
            }
        }
        return false;
    }

    clone(){
        if(this.root === null){
            this.root = new Node(value, null, null);
            return;
        }
        var currentNode = this.root;
        while(true){
            if(value < currentNode.value){//goes to the left
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = new Node(value, null, null);
                    return;
                }
            }else{//goes to the right
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = new Node(value, null, null);
                    return;
                }
            }
        }
    }

}

const myTree = new Tree();
myTree.add(30);
myTree.add(15);
myTree.add(60);
myTree.add(7);
myTree.add(22);
myTree.add(17);
myTree.add(27);
myTree.add(45);
myTree.add(75);

console.log(JSON.stringify(myTree,null,2))
console.log(myTree.contains(27))