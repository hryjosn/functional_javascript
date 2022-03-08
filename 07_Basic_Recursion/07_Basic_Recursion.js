function reduce (arr, fn, initial) {
  console.log("pre arr")
  if (!arr.length) return initial
  const next = arr.pop() // shift off first value
  initial = fn(initial, next, 0, arr) // get reduced value
  console.log("next arr")

  return reduce(arr, fn, initial) // recur
}
module.exports = reduce
// var curr;
//   if (!arr.length) {
//     return init;
//   }
//   curr = arr[0];
//   init = reducer(init, curr, 0, arr);
//   return reduce(arr.slice(1), reducer, init);