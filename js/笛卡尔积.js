const arr = [
  ['iphone11', 'iphone12', 'iphone13'],
  ['黑色', '白色', '银色', '金色', '紫色'],
  ['64G', '128G', '256G', '512G']
]
/**
 * 输出
 * [
  'iphone11-黑色-64G',  'iphone11-黑色-128G', 'iphone11-黑色-256G',
  'iphone11-黑色-512G', 'iphone11-白色-64G',  'iphone11-白色-128G',
  'iphone11-白色-256G', 'iphone11-白色-512G', 'iphone11-银色-64G',
  'iphone11-银色-128G', 'iphone11-银色-256G', 'iphone11-银色-512G',
  'iphone11-金色-64G',  'iphone11-金色-128G', 'iphone11-金色-256G',
  'iphone11-金色-512G', 'iphone11-紫色-64G',  'iphone11-紫色-128G',
  'iphone11-紫色-256G', 'iphone11-紫色-512G', 'iphone12-黑色-64G',
  'iphone12-黑色-128G', 'iphone12-黑色-256G', 'iphone12-黑色-512G',
  'iphone12-白色-64G',  'iphone12-白色-128G', 'iphone12-白色-256G',
  'iphone12-白色-512G', 'iphone12-银色-64G',  'iphone12-银色-128G',
  'iphone12-银色-256G', 'iphone12-银色-512G', 'iphone12-金色-64G',
  'iphone12-金色-128G', 'iphone12-金色-256G', 'iphone12-金色-512G',
  'iphone12-紫色-64G',  'iphone12-紫色-128G', 'iphone12-紫色-256G',
  'iphone12-紫色-512G', 'iphone13-黑色-64G',  'iphone13-黑色-128G',
  'iphone13-黑色-256G', 'iphone13-黑色-512G', 'iphone13-白色-64G',
  'iphone13-白色-128G', 'iphone13-白色-256G', 'iphone13-白色-512G',
  'iphone13-银色-64G',  'iphone13-银色-128G', 'iphone13-银色-256G',
  'iphone13-银色-512G', 'iphone13-金色-64G',  'iphone13-金色-128G',
  'iphone13-金色-256G', 'iphone13-金色-512G', 'iphone13-紫色-64G',
  'iphone13-紫色-128G', 'iphone13-紫色-256G', 'iphone13-紫色-512G'
]
 */
function getAllProduct(arr) {
  const result = [];
  function _fn(_arr){
    if(result.length === 0){
      result.push(_arr);
    } else {
      const lastLine = result[result.length - 1]
      const temp = [];
      for (let i = 0; i < lastLine.length; i++) {
        for (let j = 0; j < _arr.length; j++) {
          temp.push(lastLine[i] + '-' + _arr[j])
        }
      }
      result.push(temp);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    _fn(arr[i])
  }
  return result[result.length - 1];
}

console.log(getAllProduct(arr))
