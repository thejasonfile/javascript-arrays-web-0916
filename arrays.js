var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){
   newArr = [element, ...arr]
   return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr, element){
  newArr = [...arr, element]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}

function accessElementInArray(arr, element){
  return arr[element]
}

function removeElementFromBeginningOfArray(arr){
  arr.shift(1)
  return arr
}

function removeElementFromEndOfArray(arr){
  arr.slice(0, arr.length-1)
  return arr
}



