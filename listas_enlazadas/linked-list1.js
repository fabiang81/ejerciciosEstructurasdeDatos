class Node {

    constructor(dato, next){
        this.dato = dato;
        this.next = next;
    }

}

class LinkedList{

    constructor(){
        this.head = null;
        this.length = 0;
    }

    add(dato){
        const node = new Node(dato);
        if(this.head === null){
            this.head = node;
            this.length++;
        }else{
            var currentNode = this.head;

            while(currentNode.next){
                if(currentNode.dato === node.dato){
                    break;
                }else{
                    currentNode = currentNode.next;
                }
            }
            if(currentNode.dato !== node.dato){
                currentNode.next = node;
                this.length++;
            }
        }
    }

    remove(dato){
        var currentNode = this.head;
        var previousNode = null;
        if(currentNode.dato === dato){
            this.head = currentNode.next;
        }else{
            while(currentNode.dato !== dato){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        this.length--;
    }

}

const myList = new LinkedList();
myList.add(22);
myList.add(33);
myList.add(23);
myList.add(22);
myList.add(23);
console.log(JSON.stringify(myList));