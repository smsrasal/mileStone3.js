 
function tinyFriend(friends) {
  var smallestName = friends[0];
  for (var i = 0; i < friends.length; i++) {
    var currentName = friends[i];
    if (currentName > smallestName) {
      smallestName = currentName;
    }
  }
  return smallestName;
}
var smallName = tinyFriend(["riaddya", "jashimma", "arifppya","sumaya"]);
console.log(smallName);
 
 
 
 
 
 
 
 
 
 
 