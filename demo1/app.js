if (window.Worker) {
  const myworker = new Worker('worker.js');

  myworker.onmessage = function (e) {
    console.log('total', e.data);
  };

  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');

  btn1.addEventListener('click', function () {
    let total = 1;
    console.time('jsRun');
    for (let i = 0; i < 5000000000; i++) {
      total += i;
    }
    console.timeEnd('jsRun');
    console.log(total);
  });

  btn2.addEventListener('click', function () {
    myworker.postMessage('total');
  })
}



