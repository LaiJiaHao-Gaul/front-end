async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 4000)
    });
    console.log(111)
    let result = await promise; // 等待，直到 promise resolve (*) 我草 js 引擎硬等待了 4000ms!!!!!只是等待,但是 js 引擎还能执行其他的任务 同时还保证了本函数内的语句执行顺序,但对于外部而言 这里面的代码仍是异步的
    //await之前的代码都是照样执行的同步代码!
    console.log((result)); // "done!"
  }
  
  f();
  console.log(222)