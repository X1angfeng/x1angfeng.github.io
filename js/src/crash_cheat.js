<!--标题崩溃欺骗效果-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href',"/images/failure.ico");
         document.title = '(●—●)喔哟,崩溃啦!';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href',"/images/avatar.png");
         document.title = '୧(๑•̀⌄•́๑)૭噫!又好了!'+OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         },2000);
     }
 });