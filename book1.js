document.addEventListener("mousewheel", function (e) {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
        event.preventDefault();
    }
}, { passive: false });
var zhanghao = -1;//判断是第几个账号登录
//首页书名
var books = [
    {
        name: "牧神记",
        author: "宅猪",
        photo: "牧神记.webp",
    },
    {
        name: "西游记",
        author: "吴承恩",
        photo: "西游记.gif",
    }, {
        name: "水浒传",
        author: "施耐庵",
        photo: "水浒传.jpg",
    }, {
        name: "三国演义",
        author: "罗贯中",
        photo: "三国演义.jpg",
    }, {
        name: "红楼梦",
        author: "曹雪芹",
        photo: "红楼梦.webp",
    },
    {
        name: "解忧杂货店",
        author: "东野圭吾",
        photo: "解忧杂货店.jpg",
    },
    {
        name: "白夜行",
        author: "东野圭吾",
        photo: "白夜行.jpg",
    },
    {
        name: "史记",
        author: "司马迁",
        photo: "史记.webp",
    },
    {
        name: "聊斋志异",
        author: "蒲松龄",
        photo: "聊斋志异.jpg",
    },
    {
        name: "安徒生童话",
        author: "安徒生",
        photo: "安徒生童话.jpg",
    },
];
var shuming = document.getElementsByClassName("mid_mid_mid_2_word_1");
for (var i = 0; i < 10; i++) {
    shuming[i].innerHTML = books[i].name;
}
//首页作者
var zuozhe = document.getElementsByClassName("mid_mid_mid_2_word_2");
for (var i = 0; i < 10; i++) {
    zuozhe[i].innerHTML = books[i].author;
}
//首页封面
var fengmian = document.getElementsByClassName("mid_mid_mid_2_photo_1");
for (var i = 0; i < 10; i++) {
    fengmian[i].src = books[i].photo;
}
//账号信息
var zhanghaos = [
    {
        name: "小毛",
        email: "1@qq.com",
        password: "111",
        account: "00001",
        introduction: "我是小毛",
        num: 1,
        book: [0],
        photo: "小毛.webp"
    },
    {
        name: "小泽",
        email: "2@qq.com",
        password: "222",
        account: "00002",
        introduction: "我是小泽",
        num: 1,
        book: [1],
        photo: "小泽.webp"
    },
    {
        name: "小熊",
        email: "3@qq.com",
        password: "333",
        account: "00003",
        introduction: "我是小熊",
        num: 1,
        book: [2],
        photo: "小熊.webp"
    },
    {
        name: "小张",
        email: "4@qq.com",
        password: "444",
        account: "00004",
        introduction: "我是小张",
        num: 1,
        book: [3],
        photo: "小张.webp"
    },
    {
        name: "小放",
        email: "5@qq.com",
        password: "555",
        account: "00005",
        introduction: "我是小放",
        num: 1,
        book: [4],
        photo: "小放.webp"
    },
    {
        name: "小旋",
        email: "6@qq.com",
        password: "666",
        account: "00006",
        introduction: "我是小旋",
        num: 1,
        book: [5],
        photo: "小旋.webp"
    }
];
var dengluyouxiang1 = document.getElementById("dengluyouxiang1");//提示
var dengluyouxiang2 = document.getElementById("dengluyouxiang2");//表单
var denglumima1 = document.getElementById("denglumima1");//提示
var denglumima2 = document.getElementById("denglumima2");//表单
var reg = /^\S+(@qq|@163)\.(com|cn)$/;
//打开登录界面
document.getElementById("denglu_button").addEventListener("click", () => {
    document.querySelector(".denglu").style.display = "block";
    document.querySelector(".zhuce").style.display = "none";
    document.querySelector(".xitongshuoming").style.display = "none";
    //登录验证
    dengluyouxiang2.onblur = function () {
        if (!reg.test(dengluyouxiang2.value)) {
            dengluyouxiang1.innerHTML = "邮箱格<br/>式错误";
            dengluyouxiang1.style.color = "red";
        }
        else {
            dengluyouxiang1.innerHTML = "邮箱";
            dengluyouxiang1.style.color = "#444444";
        }
    };
    denglumima2.onblur = function () {
        denglumima1.innerHTML = "密码";
        denglumima1.style.color = "#444444";
    };
});

//登录界面确定
var dengluflag = 0;//判断是否登录
//cookie登录
for (let i = 0; i < zhanghaos.length; i++) {
    if (zhanghaos[i].email == $.cookie("denglu_email_1")) {
        if (zhanghaos[i].password == $.cookie("denglu_mima_1")) {
            //登录通过
            zhanghao = i;
            document.querySelector(".denglu").style.display = "none";
            dengluflag = 1;
            alert("登录成功");
            break;
        }
        else {
            break;
        }
    }
    else {
        ;
    }

}
document.querySelector(".denglu_3_1").addEventListener("click", () => {
    var flag = true;//判断邮箱是否存在
    for (var i = 0; i < zhanghaos.length; i++) {
        if (zhanghaos[i].email == dengluyouxiang2.value) {
            flag = false;
            if (zhanghaos[i].password == denglumima2.value) {
                //登录通过
                zhanghao = i;
                document.querySelector(".denglu").style.display = "none";
                dengluflag = 1;
                alert("登录成功");
                $.cookie("denglu_email_1", dengluyouxiang2.value, { expires: 1 });
                $.cookie("denglu_mima_1", denglumima2.value, { expires: 1 });
                break;
            }
            else {
                denglumima1.innerHTML = "密码<br/>错误";
                denglumima1.style.color = "red";
                break;
            }
        }
        else {
            ;
        }
    }
    if (flag == true) {
        dengluyouxiang1.innerHTML = "该邮箱<br/>未注册";
        dengluyouxiang1.style.color = "red";
    }
    //个人账号功能
    var geren_photo = document.getElementById("geren_photo");//头像
    var geren_zhanghao = document.getElementById("geren_zhanghao");//账号
    var geren_nicheng = document.getElementById("geren_nicheng");//昵称
    var geren_jieshao = document.getElementById("geren_jieshao");//介绍
    var person_book_lnquiry1_book_photo = document.getElementsByClassName("person_book_lnquiry1_book_photo");//图书封面
    var person_book_lnquiry1_name = document.getElementsByClassName("person_book_lnquiry1_name");//图书名字
    var person_book_lnquiry1_author = document.getElementsByClassName("person_book_lnquiry1_author");//图书作者
    var tuichu = document.getElementById("tuichu");//退出登录
    geren_photo.src = zhanghaos[zhanghao].photo;
    geren_zhanghao.innerHTML = zhanghaos[zhanghao].account;
    geren_nicheng.innerHTML = zhanghaos[zhanghao].name;
    geren_jieshao.innerHTML = zhanghaos[zhanghao].introduction;
    for (var i = 0; i < 4; i++) {
        person_book_lnquiry1_book_photo[i].style.display = "none";
    }
    for (var i = 0; i < zhanghaos[zhanghao].num; i++) {
        person_book_lnquiry1_book_photo[i].src = books[zhanghaos[zhanghao].book[i]].photo;
        person_book_lnquiry1_book_photo[i].style.display = "block";
        person_book_lnquiry1_name[i].innerHTML = "书名：" + books[zhanghaos[zhanghao].book[i]].name;
        person_book_lnquiry1_author[i].innerHTML = "作者：" + books[zhanghaos[zhanghao].book[i]].author;
    }
    tuichu.addEventListener("click", () => {
        dengluflag = 0;
        zhanghao = -1;
        document.getElementById("sousuojiantou").src = "右箭头.png";
        document.getElementById("shukujiantou").src = "下箭头.png";
        document.getElementById("jiehuanjiantou").src = "右箭头.png";
        document.getElementById("gerenjiantou").src = "右箭头.png";
        gongneng1.style.display = "block";
        gongneng2.style.display = "none";
        gongneng3.style.display = "none";
        gongneng4.style.display = "none";
    });
});
//个人账号
var geren_photo = document.getElementById("geren_photo");//头像
var geren_zhanghao = document.getElementById("geren_zhanghao");//账号
var geren_nicheng = document.getElementById("geren_nicheng");//昵称
var geren_jieshao = document.getElementById("geren_jieshao");//介绍
var person_book_lnquiry1_book_photo = document.getElementsByClassName("person_book_lnquiry1_book_photo");//图书封面
var person_book_lnquiry1_name = document.getElementsByClassName("person_book_lnquiry1_name");//图书名字
var person_book_lnquiry1_author = document.getElementsByClassName("person_book_lnquiry1_author");//图书作者
var tuichu = document.getElementById("tuichu");//退出登录
geren_photo.src = zhanghaos[zhanghao].photo;
geren_zhanghao.innerHTML = zhanghaos[zhanghao].account;
geren_nicheng.innerHTML = zhanghaos[zhanghao].name;
geren_jieshao.innerHTML = zhanghaos[zhanghao].introduction;
for (var i = 0; i < 4; i++) {
    person_book_lnquiry1_book_photo[i].style.display = "none";
}
for (var i = 0; i < zhanghaos[zhanghao].num; i++) {
    person_book_lnquiry1_book_photo[i].src = books[zhanghaos[zhanghao].book[i]].photo;
    person_book_lnquiry1_book_photo[i].style.display = "block";
    person_book_lnquiry1_name[i].innerHTML = "书名：" + books[zhanghaos[zhanghao].book[i]].name;
    person_book_lnquiry1_author[i].innerHTML = "作者：" + books[zhanghaos[zhanghao].book[i]].author;
}
tuichu.addEventListener("click", () => {
    dengluflag = 0;
    zhanghao = -1;
    document.getElementById("sousuojiantou").src = "右箭头.png";
    document.getElementById("shukujiantou").src = "下箭头.png";
    document.getElementById("jiehuanjiantou").src = "右箭头.png";
    document.getElementById("gerenjiantou").src = "右箭头.png";
    gongneng1.style.display = "block";
    gongneng2.style.display = "none";
    gongneng3.style.display = "none";
    gongneng4.style.display = "none";
});


//登录界面关闭
document.getElementById("denglu_chacha").addEventListener("click", () => {
    document.querySelector(".denglu").style.display = "none";
});
//打开注册界面
var zhuceemail = document.getElementById("zhuceemail");
var zhucemima1 = document.getElementById("zhucemima1");
var zhucemima2 = document.getElementById("zhucemima2");
var zhuceyouxiang = document.getElementById("zhuceyouxiang");
document.getElementById("zhuce_button").addEventListener("click", () => {
    document.querySelector(".zhuce").style.display = "block";
    document.querySelector(".denglu").style.display = "none";
    document.querySelector(".xitongshuoming").style.display = "none";

});
var flag1 = 0;//邮箱格式是否正确
zhuceemail.onblur = function () {
    if (!reg.test(zhuceemail.value)) {
        flag1 = 0;
        zhuceyouxiang.innerHTML = "邮箱格<br/>式错误";
        zhuceyouxiang.style.color = "red";
    }
    else {
        flag1 = 1;
        zhuceyouxiang.innerHTML = "邮箱";
        zhuceyouxiang.style.color = "#444444";
    }
};
//注册界面确定

document.querySelector(".zhuce_3_1").addEventListener("click", () => {
    if (zhucemima1.value == zhucemima2.value) {
        document.getElementById("again").innerHTML = "密码";
        document.getElementById("again").style.color = "#444444";
        if (flag1 == 1) {
            zhanghaos[zhanghaos.length] = {
                name: zhuceemail.value,
                email: zhuceemail.value,
                password: zhucemima1.value,
                account: "0000" + (zhanghaos.length + 1),
                introduction: "我是" + zhuceemail.value,
                num: 0,
                book: [],
                photo: "未登录头像.jpg"
            };
            alert("注册成功");
            document.querySelector(".zhuce").style.display = "none";
        }
    }
    else {
        document.getElementById("again").innerHTML = "两次密<br/>码不同";
        document.getElementById("again").style.color = "red";
    }
});
//注册界面关闭
document.getElementById("zhuce_chacha").addEventListener("click", () => {
    document.querySelector(".zhuce").style.display = "none";
});
//打开帮助
document.getElementById("bangzhu_button").addEventListener("click", () => {
    document.querySelector(".xitongshuoming").style.display = "block";
    document.querySelector(".zhuce").style.display = "none";
    document.querySelector(".denglu").style.display = "none";
});
//关闭帮助
document.getElementById("xitong_chacha").addEventListener("click", () => {
    document.querySelector(".xitongshuoming").style.display = "none";
});
//功能切换
var gongneng1 = document.getElementById("gongneng1");
var gongneng2 = document.getElementById("gongneng2");
var gongneng3 = document.getElementById("gongneng3");
var gongneng4 = document.getElementById("gongneng4");

let bookDetails = document.querySelector(".bookDetails")

gongneng1.style.display = "block";
gongneng2.style.display = "none";
gongneng3.style.display = "none";
gongneng4.style.display = "none";
document.getElementById("shuku").addEventListener("click", () => {
    if (dengluflag == 1) {
        document.getElementById("sousuojiantou").src = "右箭头.png";
        document.getElementById("shukujiantou").src = "下箭头.png";
        document.getElementById("jiehuanjiantou").src = "右箭头.png";
        document.getElementById("gerenjiantou").src = "右箭头.png";
        gongneng1.style.display = "block";
        gongneng2.style.display = "none";
        gongneng3.style.display = "none";
        gongneng4.style.display = "none";
        bookDetails.style.display = "none";
    }

});
document.getElementById("sousuo").addEventListener("click", () => {
    if (dengluflag == 1) {
        document.getElementById("sousuojiantou").src = "下箭头.png";
        document.getElementById("shukujiantou").src = "右箭头.png";
        document.getElementById("jiehuanjiantou").src = "右箭头.png";
        document.getElementById("gerenjiantou").src = "右箭头.png";
        gongneng1.style.display = "none";
        gongneng2.style.display = "block";
        gongneng3.style.display = "none";
        gongneng4.style.display = "none";
        bookDetails.style.display = "none";
    }

});
document.getElementById("jiehuan").addEventListener("click", () => {
    if (dengluflag == 1) {
        document.getElementById("sousuojiantou").src = "右箭头.png";
        document.getElementById("shukujiantou").src = "右箭头.png";
        document.getElementById("jiehuanjiantou").src = "下箭头.png";
        document.getElementById("gerenjiantou").src = "右箭头.png";
        gongneng1.style.display = "none";
        gongneng2.style.display = "none";
        gongneng3.style.display = "block";
        gongneng4.style.display = "none";
        bookDetails.style.display = "none";
    }

});
document.getElementById("geren").addEventListener("click", () => {
    if (dengluflag == 1) {
        document.getElementById("sousuojiantou").src = "右箭头.png";
        document.getElementById("shukujiantou").src = "右箭头.png";
        document.getElementById("jiehuanjiantou").src = "右箭头.png";
        document.getElementById("gerenjiantou").src = "下箭头.png";
        gongneng1.style.display = "none";
        gongneng2.style.display = "none";
        gongneng3.style.display = "none";
        gongneng4.style.display = "block";
        bookDetails.style.display = "none";
    }

});
for (let i = 0; i < 10; i++) {
    fengmian[i].addEventListener("click", function () {
        bookDetails.style.display = "grid";
        gongneng1.style.display = "none";
        gongneng2.style.display = "none";
        gongneng3.style.display = "none";
        gongneng4.style.display = "none";
    })
}

let unreturnedBook = document.querySelector(".unreturnedBook");
let recordDiv = document.querySelector(".recordDiv")
let borrowRecord = document.querySelector(".borrowRecord");
let cover = unreturnedBook.getElementsByClassName("cover");
console.log(cover);
for (let i = 0; i < cover.length; i++) {
    cover[i].addEventListener('click', () => {
        bookDetails.style.display = "grid";
        recordDiv.style.display = "none";
    })
}
cover = borrowRecord.getElementsByClassName("cover");
for (let i = 0; i < cover.length; i++) {
    cover[i].addEventListener('click', () => {
        bookDetails.style.display = "grid";
    })
}

// let cover = unreturnedBook.getElementsByClassName("cover");
// for (let i = 0; i < cover.length; i++) {
//     cover[i].addEventListener('click', () => {
//         bookDetails.style.display = "grid";

//     })
// }
// cover = borrowRecord.getElementsByClassName("cover");
// for (let i = 0; i < cover.length; i++) {
//     cover[i].addEventListener('click', () => {
//         bookDetails.style.display = "grid";
//     })
// }
//推荐、分类切换
// document.getElementById("tuijian").addEventListener("click",()=>{
//     document.getElementById("tuijian").className="mid_mid_top_left";
//     document.getElementById("fenlei").className="mid_mid_top_right";
// });
// document.getElementById("fenlei").addEventListener("click",()=>{
//     document.getElementById("tuijian").className="mid_mid_top_right";
//     document.getElementById("fenlei").className="mid_mid_top_left";
// });

