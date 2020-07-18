var title1="text=又有新评论啦~！--by Valine"
var SCKEY_Server="SCU106244T858256e0e24ac4246ecd86caa0f034505f12bc1488dfd"
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Server(){
    var text="desp=";
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data=text+"|昵称："+"|邮箱："+"|网站地址："+"|当前页面："+"|评论内容："+"|跳转链接："+"|评论时间"+"\n"+"|----|----|----|----|"+"\n"+"|   "+vnick+"   |   "+vmail+"  |  "+vlink+"|   "+res+"| "+veditor+"| "+pageurl+"|" +ptime.toLocaleString()+"|";
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'https://sc.ftqq.com/'+SCKEY_Server+'.send', true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title1+"&"+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Server;