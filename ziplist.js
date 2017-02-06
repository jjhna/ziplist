/**
 * ICS 314 E27 Assignment
 * Created by jojona on 2/6/17.ss
 */

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(list1, list2) {
  const arrayList = [];
  for (let i = 0; i < list1.length; i++) {
    arrayList.push(list1[i], list2[i]);
  }
  return arrayList;
}

console.log(zipList(letters, numbers));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(letters, numbers));
