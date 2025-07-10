/**
 * 描述：
 *  编写一个任务调度器正确执行下面的用例代码。
 */
class Scheduler {
  constructor() {
    this.queue = [];
    this.maxLimit = 2;
    this.runningNums = 0;
  }
  addTask(task) {
    this.queue.push(() => new Promise((resolve, reject) => task().then(resolve, reject)));
    this._run();
  }
  _run() {
    if(this.runningNums >= this.maxLimit || this.queue.length === 0) {
      return;
    }
    // console.log('runningNums:', this.runningNums, 'queue length:', this.queue.length);
    const task = this.queue.shift();
    this.runningNums++;
    task().finally(()=>{
      this.runningNums--;
      this._run();
    })
  }
}

// 用例代码
// 辅助函数
const promiseTimeout = (time, value) => {
  console.time('promiseTimeout' + value);
  return () => new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
      console.timeEnd('promiseTimeout' + value);
    }, time);
  })
}
const scheduler = new Scheduler();
scheduler.addTask(promiseTimeout(1000, '1'));
scheduler.addTask(promiseTimeout(500, '2'));
scheduler.addTask(promiseTimeout(300, '3'));
scheduler.addTask(promiseTimeout(400, '4'));
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列(队列最大长度为2)
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
