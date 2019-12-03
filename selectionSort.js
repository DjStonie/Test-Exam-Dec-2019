 function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let smallest = arr[i];
      if (isNaN(smallest)) {
        arr[i] = 'ø';
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < smallest) {
          smallest = j;
        } else {
          console.log(smallest + ' is now smaller than ' + arr[j])
        }
      }
      const temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
