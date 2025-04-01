function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
  }
  
  function myMap(collection, callback) {
    let result = [];
    myEach(collection, function(value, index, collection) {
      result.push(callback(value, index, collection));
    });
    return result;
  }
  
  function myReduce(collection, callback, accumulator) {
    myEach(collection, function(value, index, collection) {
      accumulator = callback(accumulator, value, index, collection);
    });
    return accumulator;
  }
  
  function myFind(collection, callback) {
    let result;
    myEach(collection, function(value, index, collection) {
      if (callback(value, index, collection)) {
        result = value;
        return;
      }
    });
    return result;
  }
  
  function myFilter(collection, callback) {
    let result = [];
    myEach(collection, function(value, index, collection) {
      if (callback(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  function myKeys(object) {
    let result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return result;
  }
  
  function myValues(object) {
    let result = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        result.push(object[key]);
      }
    }
    return result;
  }
  