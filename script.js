addEventListener('load', function (e) {
    const tList = ["t1", "t2", "t3", "t4"];
    const button = document.querySelector('#t1')
    const loop = (arr, count = 0, time = 1000) => {
        location.hash = arr[count % arr.length];
        button.id = (arr[count % arr.length])
        console.log(arr[count % arr.length])
        setTimeout(loop.bind(this, arr, count + 1, time), time);
    };
    loop(tList);
})