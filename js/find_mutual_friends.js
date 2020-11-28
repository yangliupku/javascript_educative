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
  var friends = {};
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

/**
 * group each mapped object representation of the friends
 * inputs = [
 *  { 'AB' : ['B', 'C', 'D'] }, // from 'A'
 *  { 'AB' : ['A', 'D'] }, // from 'B'
 * ]
 * outputs ={ 'AB' : [['B', 'C', 'D'],['A', 'D']] },
 */
function group(mapped_arr) {
  var grouped_friends = {};
  mapped_arr.forEach(function (row) {
    var key = Object.keys(row)[0];
    friends = row[key];
    if (key in grouped_friends) {
      grouped_friends[key].push(friends);
    } else {
      grouped_friends[key] = [friends];
    }
  });
  return grouped_friends;
}

module.exports = { setup, mapper, group };
