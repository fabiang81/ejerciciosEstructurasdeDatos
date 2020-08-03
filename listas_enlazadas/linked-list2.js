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
        }else{
            var currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.length++;
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

    iterate(){
        if(this.head === null){
            console.log("No hay elementos en la lista")
        }else{
            var currentNode = this.head;

            while(currentNode){
                console.log(currentNode.dato);
                currentNode = currentNode.next;
            }
        }
    }

    iterateIf(value){
        if(this.head === null){
            console.log("No hay elementos en la lista")
        }else{
            var currentNode = this.head;

            while(currentNode){
                if(currentNode.dato > value){
                    console.log(currentNode.dato);
                }
                currentNode = currentNode.next;
            }
        }
    }

}

const myList = new LinkedList();
myList.add(22);
myList.add(33);
myList.add(44);
myList.iterateIf(35);