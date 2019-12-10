module.exports = selectionSort
function selectionSort(s) {
  arr = s.split(",");
  for (let c = 0; c < arr.length; c++) {
    const element = arr[c];
    if (isNaN(arr[c])) {
      if (/^[A-Za-z]+$/.test(arr[c])) {
        arr[c] = arr[c].charCodeAt(0);
      } else {
        arr[c] = -1;
        continue;
      }
    } 
    else {
      let i = parseInt(arr[c])
      if (i > 100){
        i = 100;
      } 
      else if (i < -100)
      {
        i = -100
      }
      arr[c] = parseInt(i)
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    const temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
