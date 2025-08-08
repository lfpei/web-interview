/**
 * 打乱数组，改变原数组
 * [1,2,3,4,5]
 * [2,3,5,4,1]或其他
 */
function shuffleArray(arr){
  const len = arr.length - 1;
  for (let i = 0; i <= len; i++) {
    const index = Math.floor(Math.random() * (len - i - 1) + i + 1);
    const temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr
}

console.log(shuffleArray([1,2,3,4,5]))
