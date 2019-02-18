<template>
<div id="common-footer">
    <ul class="footer-nav clear">
        <li><router-link to="/">掌阅官网</router-link></li>
        <li><router-link to="/">掌阅小说</router-link></li>
        <li><router-link to="/">红薯中文</router-link></li>
        <li><router-link to="/">趣阅中文</router-link></li>
        <li><router-link to="/">魔情言情</router-link></li>
        <li><router-link to="/">神起网</router-link></li>
        <li><router-link to="/">若看文学</router-link></li>
        <li><router-link to="/">喵阅读</router-link></li>
        <li><router-link to="/">联系我们</router-link></li>
        <li><router-link to="/">商务合作</router-link></li>
        <li><router-link to="/">关于我们</router-link></li>
        <li><router-link to="/">法律声明</router-link></li>
    </ul>
    <p>出版物经营许可证京ICP备11008516号网络出版服务许可证（总）网出证（京）字第141号京ICP证090653号</p>
    <p>2015 All Rights Reserved 掌阅科技股份有限公司 版权所有</p>
</div>
</template>
<script>
export default{
    name:"common-footer"
}
</script>
<style>
#common-footer{
    margin-top:50px;
    margin-bottom:30px;
    font-family:"Microsoft yahei";
}
.footer-nav{
    text-align:center;
    width:1200px;
    margin:30px auto 10px;
}
.footer-nav li{
    font-size:14px;
    color:#888;
    padding:5px 10px;
    line-height:30px;
    display:inline-block;
}
.footer-nav li a{
    color:#888;
}
#common-footer p{
    font-size:12px;
    line-height:24px;
    color:#888;
    text-align:center;
}
</style>