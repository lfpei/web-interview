/**
 * 依次循序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，都不可中断，只能在两个任务之间中断
 * @param {...Function} tasks 任务列表，每个任务无参异步
 */
function processTasks(...tasks) {
  const result = [];
  let currentIndex = 0;
  let isPause = true;
  function start() {
    return new Promise(async (resolve) => {
      if(!isPause) return;
      isPause = false;
      if(result.length === tasks.length){
        result.splice(0, result.length);
        currentIndex = 0;
      }
      while(currentIndex < tasks.length) {
        console.log(currentIndex + '开始')
        const r = await tasks[currentIndex]();
        console.log(currentIndex + '完成')
        result.push(r);
        currentIndex++;
        if(isPause) return;
      }
      resolve(result);
      isPause = true;
    })
  }
  function pause() {
    if(isPause) return;
    isPause = true;
  }
  return {
    start,
    pause
  }
}
