document.addEventListener("mousewheel", function (e) {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
    event.preventDefault();
    }
}, {passive: false}); 
   
//首页书名
var shuming=document.getElementsByClassName("mid_mid_mid_2_word_1");
var shumings=["牧神记","西游记","水浒传","三国演义","红楼梦","解忧杂货店","白夜行","史记","聊斋志异","安徒生童话"];
for(var i=0;i<10;i++)
{
    shuming[i].innerHTML=shumings[i];
}
//首页作者
var zuozhe=document.getElementsByClassName("mid_mid_mid_2_word_2");
var zuozhes=["宅猪","吴承恩","施耐庵","罗贯中","曹雪芹","东野圭吾","东野圭吾","司马迁","蒲松龄","安徒生"];
for(var i=0;i<10;i++)
{
    zuozhe[i].innerHTML=zuozhes[i];
}
//首页封面
var fengmian=document.getElementsByClassName("mid_mid_mid_2_photo_1");
var fengmians=["牧神记.webp","西游记.gif","水浒传.jpg","三国演义.jpg","红楼梦.webp","解忧杂货店.jpg","白夜行.jpg","史记.webp","聊斋志异.jpg","安徒生童话.jpg"];
for(var i=0;i<10;i++)
{
    fengmian[i].src=fengmians[i];
}
//账号信息
var zhanghaos=[
    {
        name:"小毛",
        email:"1@qq.com",
        password:"111",
        account:"00001",
        introduction:"我是小毛" ,
        num:1,
        book:["牧神记"],
        photo:"小毛.webp"
    },
    {
        name:"小泽",
        email:"2@qq.com",
        password:"2",
        account:"00002",
        introduction:"我是小泽" ,
        num:1,
        book:["西游记"],
        photo:"小泽.webp"
    },
    {
        name:"小熊",
        email:"3@qq.com",
        password:"333",
        account:"00003",
        introduction:"我是小熊" ,
        num:1,
        book:["水浒传"],
        photo:"小熊.webp"
    },
    {
        name:"小张",
        email:"4@qq.com",
        password:"444",
        account:"00004",
        introduction:"我是小张" ,
        num:1,
        book:["三国演义"],
        photo:"小张.webp"
    },
    {
        name:"小放",
        email:"5@qq.com",
        password:"555",
        account:"00005",
        introduction:"我是小放" ,
        num:1,
        book:["红楼梦"],
        photo:"小放.webp"
    },
    {
        name:"小旋",
        email:"6@qq.com",
        password:"666",
        account:"00006",
        introduction:"我是小旋" ,
        num:1,
        book:["白夜行"],
        photo:"小旋.webp"
    }
];
var dengluyouxiang1=document.getElementById("dengluyouxiang1");//提示
var dengluyouxiang2=document.getElementById("dengluyouxiang2");//表单
var denglumima1=document.getElementById("denglumima1");//提示
var denglumima2=document.getElementById("denglumima2");//表单
var reg=/^\S+(@qq|@163)\.(com|cn)$/;
//打开登录界面
document.getElementById("denglu_button").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="block";
    document.querySelector(".zhuce").style.display="none";
    document.querySelector(".xitongshuoming").style.display="none";
    //登录验证
    dengluyouxiang2.onblur=function()
    {
        if(!reg.test(dengluyouxiang2.value))
        {
            dengluyouxiang1.innerHTML="邮箱格<br/>式错误";
            dengluyouxiang1.style.color="red";
        }
        else
        {
            dengluyouxiang1.innerHTML="邮箱";
            dengluyouxiang1.style.color="#444444";
        }
    };
    denglumima2.onblur=function()
    {
        denglumima1.innerHTML="密码";
        denglumima1.style.color="#444444";
    }; 
});

//登录界面确定
var dengluflag=0;
document.querySelector(".denglu_3_1").addEventListener("click",()=>{
    var flag=true;
    for(var i=0;i<zhanghaos.length;i++)
    {
        if(zhanghaos[i].email==dengluyouxiang2.value)
        {
            flag=false;
            if(zhanghaos[i].password==denglumima2.value)
            {
                //登录通过
                document.querySelector(".denglu").style.display="none";
                dengluflag=1;
                alert("登录成功");
                break;
            }
            else
            {
                denglumima1.innerHTML="密码<br/>错误";
                denglumima1.style.color="red";
                break;
            }
        }
        else
        {
            ;
        }
    }
    if(flag==true)
    {
        dengluyouxiang1.innerHTML="该邮箱<br/>未注册";
        dengluyouxiang1.style.color="red";
    }
});



//登录界面关闭
document.getElementById("denglu_chacha").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="none";
});
//打开注册界面
var zhuceemail=document.getElementById("zhuceemail");
var zhucemima1=document.getElementById("zhucemima1");
var zhucemima2=document.getElementById("zhucemima2");
var zhuceyouxiang=document.getElementById("zhuceyouxiang");
document.getElementById("zhuce_button").addEventListener("click",()=>{
    document.querySelector(".zhuce").style.display="block";
    document.querySelector(".denglu").style.display="none";
    document.querySelector(".xitongshuoming").style.display="none";
    
});
var flag1=0;//邮箱格式是否正确
zhuceemail.onblur=function()
    {
        if(!reg.test(zhuceemail.value))
        {
            flag1=0;
            zhuceyouxiang.innerHTML="邮箱格<br/>式错误";
            zhuceyouxiang.style.color="red";
        }
        else
        {
            flag1=1;
            zhuceyouxiang.innerHTML="邮箱";
            zhuceyouxiang.style.color="#444444";
        }
    };
//注册界面确定

document.querySelector(".zhuce_3_1").addEventListener("click",()=>{
    if(zhucemima1.value==zhucemima2.value )
    {
        document.getElementById("again").innerHTML="密码";
        document.getElementById("again").style.color="#444444";
        if(flag1==1)
        {
            zhanghaos[zhanghaos.length]={
                name:zhuceemail.value,
                email:zhuceemail.value,
                password:zhucemima1.value,
                account:"0000"+(zhanghaos.length+1),
                introduction:"我是"+zhuceemail.value ,
                num:1,
                book:[],
                photo:"小旋.webp"
            };
            alert("注册成功");
            document.querySelector(".zhuce").style.display="none";
        }
    }
    else
    {
        document.getElementById("again").innerHTML="两次密<br/>码不同";
        document.getElementById("again").style.color="red";
    }
});
//注册界面关闭
document.getElementById("zhuce_chacha").addEventListener("click",()=>{
    document.querySelector(".zhuce").style.display="none";
});
//打开帮助
document.getElementById("bangzhu_button").addEventListener("click",()=>{
    document.querySelector(".xitongshuoming").style.display="block";
    document.querySelector(".zhuce").style.display="none";
    document.querySelector(".denglu").style.display="none";
});
//关闭帮助
document.getElementById("xitong_chacha").addEventListener("click",()=>{
    document.querySelector(".xitongshuoming").style.display="none";
});
//功能切换
var gongneng1=document.getElementById("gongneng1");
var gongneng2=document.getElementById("gongneng2");
var gongneng3=document.getElementById("gongneng3");
var gongneng4=document.getElementById("gongneng4");
gongneng1.style.display="block";
gongneng2.style.display="none";
gongneng3.style.display="none";
gongneng4.style.display="none";
document.getElementById("shuku").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("sousuojiantou").src="右箭头.png";
        document.getElementById("shukujiantou").src="下箭头.png";
        document.getElementById("jiehuanjiantou").src="右箭头.png";
        document.getElementById("gerenjiantou").src="右箭头.png";
        gongneng1.style.display="block";
        gongneng2.style.display="none";
        gongneng3.style.display="none";
        gongneng4.style.display="none";
    }
    
});
document.getElementById("sousuo").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("sousuojiantou").src="下箭头.png";
        document.getElementById("shukujiantou").src="右箭头.png";
        document.getElementById("jiehuanjiantou").src="右箭头.png";
        document.getElementById("gerenjiantou").src="右箭头.png";
        gongneng1.style.display="none";
        gongneng2.style.display="block";
        gongneng3.style.display="none";
        gongneng4.style.display="none";
    }
    
});
document.getElementById("jiehuan").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("sousuojiantou").src="右箭头.png";
        document.getElementById("shukujiantou").src="右箭头.png";
        document.getElementById("jiehuanjiantou").src="下箭头.png";
        document.getElementById("gerenjiantou").src="右箭头.png";
        gongneng1.style.display="none";
        gongneng2.style.display="none";
        gongneng3.style.display="block";
        gongneng4.style.display="none";
    }
    
});
document.getElementById("geren").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("sousuojiantou").src="右箭头.png";
        document.getElementById("shukujiantou").src="右箭头.png";
        document.getElementById("jiehuanjiantou").src="右箭头.png";
        document.getElementById("gerenjiantou").src="下箭头.png";
        gongneng1.style.display="none";
        gongneng2.style.display="none";
        gongneng3.style.display="none";
        gongneng4.style.display="block";
    }
    
});
//推荐、分类切换
// document.getElementById("tuijian").addEventListener("click",()=>{
//     document.getElementById("tuijian").className="mid_mid_top_left";
//     document.getElementById("fenlei").className="mid_mid_top_right";
// });
// document.getElementById("fenlei").addEventListener("click",()=>{
//     document.getElementById("tuijian").className="mid_mid_top_right";
//     document.getElementById("fenlei").className="mid_mid_top_left";
// });
