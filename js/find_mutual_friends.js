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

module.exports = { setup };
