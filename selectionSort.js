 function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let smallest = arr[i];
      if (isNaN(smallest)) {
        if(/^[A-Za-z]+$/.test(smallest)){
          smallest = smallest.charCodeAt(0)
        } else {
          throw "Error: Only accept alphanumeric (US)"
        }
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < smallest) {
          smallest = j;
        }
      }
      const temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }