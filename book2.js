document.addEventListener("mousewheel", function (e) {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
    event.preventDefault();
    }
}, {passive: false});  
//登录验证
var dengluyouxiang1=document.getElementById("dengluyouxiang1");//提示
var dengluyouxiang2=document.getElementById("dengluyouxiang2");//表单
var denglumima1=document.getElementById("denglumima1");//提示
var denglumima2=document.getElementById("denglumima2");//表单
var reg=/^\S+(@qq|@163)\.(com|cn)$/;
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
//管理员账号
var msg=[
    {
        name:"小毛",
        email:"xiaomao@qq.com",
        password:"xiaomao"
    },
    {
        name:"小泽",
        email:"xiaoze@qq.com",
        password:"xiaoze"
    }
];
//cookie登录
var dengluflag=0;//判断是否登录成功
for(var i=0;i<msg.length;i++)
    {
        if(msg[i].email==$.cookie("denglu_email_2"))
        {            
            if(msg[i].password==$.cookie("denglu_mima_2"))
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
    }
//打开登录界面

document.getElementById("denglu_button").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="block";
});
//登录界面确定
document.querySelector(".denglu_3_1").addEventListener("click",()=>{
    var flag=true;
    // msg为数据库中账号信息
    for(var i=0;i< msg.length;i++)
    {
        if(msg[i].email==dengluyouxiang2.value)
        {
            flag=false;
            
            if(msg[i].password==denglumima2.value)
            {
                //登录通过
                document.querySelector(".denglu").style.display="none";
                dengluflag=1;
                alert("登录成功");
                $.cookie("denglu_email_2", dengluyouxiang2.value,{expires: 1});
                $.cookie("denglu_mima_2", denglumima2.value,{expires: 1});
                break;
            }
            else
            {
                denglumima1.innerHTML="密码<br/>错误";
                denglumima1.style.color="red";
                break;
            }
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
//登录成功后才能进行操作
//功能切换
var gongneng1=document.getElementById("gongneng1");
var gongneng2=document.getElementById("gongneng2");
var gongneng3=document.getElementById("gongneng3");
gongneng1.style.display="block";
gongneng2.style.display="none";
gongneng3.style.display="none";
document.getElementById("xinxi").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("xinxijiantou").src="下箭头.png";
        document.getElementById("bianjijiantou").src="右箭头.png";
        document.getElementById("gerenjiantou").src="右箭头.png";
        gongneng1.style.display="block";
        gongneng2.style.display="none";
        gongneng3.style.display="none";
    }
});
document.getElementById("bianji").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("xinxijiantou").src="右箭头.png";
        document.getElementById("bianjijiantou").src="下箭头.png";
        document.getElementById("gerenjiantou").src="右箭头.png";
        gongneng1.style.display="none";
        gongneng2.style.display="block";
        gongneng3.style.display="none";
    }
    
});
document.getElementById("geren").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("xinxijiantou").src="右箭头.png";
        document.getElementById("bianjijiantou").src="右箭头.png";
        document.getElementById("gerenjiantou").src="下箭头.png";
        gongneng1.style.display="none";
        gongneng2.style.display="none";
        gongneng3.style.display="block";
    }
});
//图书、账号功能切换
var flag1=1;//1是图书功能，2是账号功能
document.getElementById("tushu").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("tushu").className="mid_mid_top_right_1";
        document.getElementById("zhanghao").className="mid_mid_top_right_2";
        flag1=1;
        document.getElementById("meisousuo").style.display="block";
        document.getElementById("tushusousuo").style.display="none";
        document.getElementById("zhanghaosousuo").style.display="none";
    }
    
});
document.getElementById("zhanghao").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        document.getElementById("tushu").className="mid_mid_top_right_2";
    document.getElementById("zhanghao").className="mid_mid_top_right_1";
    flag1=2;
    document.getElementById("meisousuo").style.display="block";
    document.getElementById("tushusousuo").style.display="none";
    document.getElementById("zhanghaosousuo").style.display="none";
    }
});
//搜索
var shuming=document.getElementsByClassName("mid_mid_mid_2_word_1");
var shumings=["牧神记","西游记","水浒传","三国演义","红楼梦","解忧杂货店","白夜行","史记","聊斋志异","安徒生童话"];
var zuozhe=document.getElementsByClassName("mid_mid_mid_2_word_2");
var zuozhes=["宅猪","吴承恩","施耐庵","罗贯中","曹雪芹","东野圭吾","东野圭吾","司马迁","蒲松龄","安徒生"];
var fengmian=document.getElementsByClassName("mid_mid_mid_2_photo_1");
var fengmians=["牧神记.webp","西游记.gif","水浒传.jpg","三国演义.jpg","红楼梦.webp","解忧杂货店.jpg","白夜行.jpg","史记.webp","聊斋志异.jpg","安徒生童话.jpg"];
var touxiang=document.getElementsByClassName("mid_mid_mid_4_1_photo_1");
var zhanghao=document.getElementsByClassName("mid_mid_mid_4_1_word");
var nicheng=document.getElementsByClassName("mid_mid_mid_4_2_word_1");
var jianjie=document.getElementsByClassName("mid_mid_mid_4_2_word_2");
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
document.getElementById("fangdajing").addEventListener("click",()=>{
    if(dengluflag==1)
    {
        if(flag1==1)//图书搜索
        {
            for(var i=0;i<10;i++)
            {
               shuming[i].innerHTML="";
               zuozhe[i].innerHTML="";
               fengmian[i].style.display="none";       
            }
            var flag2=0;//填充到第几个
            document.getElementById("meisousuo").style.display="none";
            document.getElementById("tushusousuo").style.display="block";
            document.getElementById("zhanghaosousuo").style.display="none";
            for(var i=0;i<10;i++)
            {
                if(shumings[i].includes(document.getElementById("search").value))
                {
                    if(document.getElementById("search").value=="")
                    {
                        ;
                    }
                    else
                    {
                        shuming[flag2].innerHTML=shumings[i];
                        zuozhe[flag2].innerHTML=zuozhes[i];
                        fengmian[flag2].src=fengmians[i];
                        fengmian[flag2].style.display="block";
                        flag2++;
                    } 
                }
                else if(document.getElementById("search").value=="")
                {
                    ;
                }
            }
        }
        else//账号搜索
        {
            
            for(var i=0;i<nicheng.length;i++)
            {
                touxiang[i].style.display="none";
                zhanghao[i].innerHTML="账号";
                nicheng[i].innerHTML="昵称";
                jianjie[i].innerHTML="简介";     
            }
            var flag3=0;//填充到第几个
            document.getElementById("meisousuo").style.display="none";
            document.getElementById("tushusousuo").style.display="none";
            document.getElementById("zhanghaosousuo").style.display="block";
            for(var i=0;i<zhanghaos.length;i++)
            {
                if(zhanghaos[i].name.includes(document.getElementById("search").value)||zhanghaos[i].account==document.getElementById("search").value)
                {
                    if(document.getElementById("search").value=="")
                    {
                        ;
                    }
                    else{
                        touxiang[flag3].style.display="block";
                        touxiang[flag3].src=zhanghaos[i].photo;
                        zhanghao[flag3].innerHTML=zhanghaos[i].account;
                        nicheng[flag3].innerHTML=zhanghaos[i].name;
                        jianjie[flag3].innerHTML=zhanghaos[i].introduction;
                        flag3++;
                    }
                    
                }
            }
        }
    }
});