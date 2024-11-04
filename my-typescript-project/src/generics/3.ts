function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj); // 
