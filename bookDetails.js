let returnBtn = document.getElementsByClassName("returnBtn");
let borrowBtn = document.querySelector(".borrowBtn");
let record = document.getElementById("record");
//返回按钮
returnBtn[0].addEventListener("click", () => {
    history.back();
})

var jieshu1 = [1, 1, 1, 1, 1, 1];
var jieshu2 = [[牧神记], [西游记], [水浒传], [三国演义], [红楼梦], [白夜行]];
var zhanghaos = [
    ["小明", "1@qq.com", "111", "00001", "我是小明", jieshu1[0], jieshu2[0]],
    ["小红", "2@qq.com", "222", "00002", "我是小红", jieshu1[1], jieshu2[1]],
    ["小亮", "3@qq.com", "333", "00003", "我是小亮", jieshu1[2], jieshu2[2]],
    ["小兰", "4@qq.com", "444", "00004", "我是小兰", jieshu1[3], jieshu2[3]],
    ["小绿", "5@qq.com", "555", "00005", "我是小绿", jieshu1[4], jieshu2[4]],
    ["小帅", "6@qq.com", "666", "00006", "我是小帅", jieshu1[5], jieshu2[5]]]
//[姓名，邮箱，密码，账号，简介，借书数量，借的书]