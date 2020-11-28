/** 
 * Take pairs of friends and output an object of all friends
 * input = [
    ['A' , 'B'],
    ['A' , 'C'],
    ['A' , 'D'],
    ['B' , 'D'],
  ]
    output = {
    'A' : ['B', 'C', 'D'],
    'B' : ['A', 'D'],
    'C' : ['A'],
    'D' : ['A', 'B']
    }
 */

function setup(arr) {
  friends = {};
  for (var i = 0; i < arr.length; i++) {
    [a, b] = arr[i];
    if (a in friends && !friends[a].includes(b)) {
      friends[a].push(b);
    } else if (!(a in friends)) {
      friends[a] = [b];
    }
    if (b in friends && !friends[b].includes(a)) {
      friends[b].push(a);
    } else if (!(b in friends)) {
      friends[b] = [a];
    }
  }
  return friends;
}

/**
 *  map each property of the object representation of the friends
 * inputs = { 'A' : ['B', 'C', 'D'] }
 * outputs = [
  { 'AB' : ['B', 'C', 'D'] },
  { 'AC' : ['B', 'C', 'D'] },
  { 'AD' : ['B', 'C', 'D'] },
 ]
 */
function mapper(setup_arr) {
  var friends_arr = [];
  for (key in setup_arr) {
    var friends = setup_arr[key];
    friends_arr = friends_arr.concat(
      friends.map(function (name) {
        var joint_key = [key, name].sort().reduce((prev, curr) => prev + curr);
        return { [joint_key]: [...friends] };
      })
    );
  }
  return friends_arr;
}
module.exports = { setup, mapper };
