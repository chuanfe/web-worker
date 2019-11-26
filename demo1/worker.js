onmessage = function (e) {
  if (e.data === 'total') {
    let total = 1;
    console.time('workerRun');
    for (let i = 0; i < 5000000000; i++) {
      total += i;
    }
    console.timeEnd('workerRun');
    postMessage(total);
  }
}