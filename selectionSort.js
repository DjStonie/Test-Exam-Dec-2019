 function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let smallest = i;
      /*
      if (isNaN(arr[smallest])) {
        if(/^[A-Za-z]+$/.test(arr[smallest])){
          smallest = arr[smallest].charCodeAt(0)
        } else {
          continue;
        }
      }
      */
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