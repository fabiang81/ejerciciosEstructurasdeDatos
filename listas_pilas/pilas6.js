class User {
    constructor(user, ticket){
        this.user = user;
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }
}

var userQueue = [];
userQueue.push(new User("User1", true));
userQueue.push(new User("User3", false));
userQueue.push(new User("User4", true));
userQueue.push(new User("User5", false));
userQueue.push(new User("User6", false));
userQueue.push(new User("User7", true));
userQueue.push(new User("User8", true));
userQueue.push(new User("User9", true));
userQueue.push(new User("User10", false));
userQueue.push(new User("User11", true));

cleanedQueue = [];
removedQueue = [];

Array.prototype.peek = function(){
    if (this.length === 0) {
        return false;
    }
    return this[0];
}

function cleanQueue(){
    while(userQueue.length > 0){
        var user = userQueue.peek();
        if(!user.getTicket()){
            removedQueue.push(userQueue.shift());
        }else{
            cleanedQueue.push(userQueue.shift());
        }
    }
}

console.log(userQueue);

cleanQueue();

console.log(removedQueue);
console.log(cleanedQueue);



