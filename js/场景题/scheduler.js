/**
 * 描述：
 *  编写一个任务调度器正确执行下面的用例代码。
 */
class Scheduler {
  constructor(maxLimit = 2) {
    this.queue = [];
    this.maxLimit = maxLimit;
    this.runningNums = 0;
  }
  add(time, name) {
    this.queue.push(() => new Promise(resolve => setTimeout(resolve, time)).then(() => console.log(name)));
  }
  run() {
    if(this.runningNums >= this.maxLimit || this.queue.length === 0) {
      return;
    }
    const task = this.queue.shift();
    this.runningNums++;
    task().finally(() => {
      this.runningNums--;
      this.run();
    })
  }
  start() {
    for(let i = 0; i < this.maxLimit; i++) {
      this.run();
    }
  }
}

// 用例代码
const scheduler = new Scheduler();
const addTask = (time, name) => {
  scheduler.add(time, name);
};
addTask(1000,"1"); // 1000ms后输出1
addTask(500,"2");  // 500ms后输出2
addTask(600,"3"); // 1100ms后输出3
addTask(400,"4"); // 1400ms后输出4
scheduler.start();
// output: 2 1 3 4
