let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    axios({
        url: '#',
        method: 'POST',
        data: {

        }
    }).then(function (res) {
        console.log("注册报文", res);
    })
})