var BaseUrl =  "http://160.202.240.130:1211";
var ResourceUrl = 'http://160.202.240.130:1999/ttxindasheng/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        alert('请先登录');
        window.location.href = '/index.html';
    }
}


        