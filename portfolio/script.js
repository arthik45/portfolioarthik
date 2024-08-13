//Exploring for each method
const friend=['arthik','mass','gopi','giri','adhiyamaan'];
friend.forEach((friends,index)=>{
    console.log(friends,index);
    friend[index]=friends.toUpperCase();
});
console.log(friend);
console.log(friend.toString());
console.log(friend.join(' * '));
console.log(friend.pop());
console.log(friend);
const frem=friend.shift();
console.log(frem);
console.log(friend);
console.log("index of: "+ friend.indexOf('GOPI'));