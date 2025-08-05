const dependences = {
  moduleA: ['moduleB', 'moduleC'],
  moduleB: ['moduleC'],
  moduleC: [],
  moduleD: ['moduleD']
}
function getLoadOrder(dependences) {
  const result = [];
  const loaded = new Set();
  function _loader(module){
    if(loaded.has(module)) return;
    loaded.add(module);
    const modules = dependences[module];
    for (const item of modules) {
      _loader(item);
    }
    result.push(module);
  }
  for (const key in dependences) {
    _loader(key)
  }
  return result;
}
console.log(getLoadOrder(dependences))
