<template>
<div id="download">
    <div class="khd_top">
       <p><img src="../assets/img/khd1_01.jpg" alt="" /></p>
       <p><img src="../assets/img/khd1_02.jpg" alt="" /></p>
   </div>
   <div class="khd_middle">
       <p class="m1">
           <a href="#" class="khd_and"></a>
           <a href="#" class="khd_ios"></a>
           <span class="sm"><img src="../assets/img/qrcode.png" alt="" /></span>
       </p>
       <p><img src="../assets/img/khd1_04.jpg" alt="" /></p>
   </div>
</div>
</template>
<script>
export default{
    name:"download"
}
</script>
<style>
/*@import "../assets/css/list.css";*/
.khd_top{
    background: #d17842;
    height: 388px;
}
.khd_top p, .khd_middle p {
    width: 934px;
    margin: 0 auto;
}
.khd_top p img{
    width:100%;
    display:block;
}
.khd_middle{
    background: url(http://www.ireader.com/static/images/khd/khd1_06.jpg) repeat-x;
    height:312px;
}
.khd_middle .m1{
    background: url(../assets/img/khd1_03.jpg) no-repeat center top;
    height: 233px;
    position: relative;
}
.khd_and{
    position: absolute;
    left: 505px;
    top: 55px;
    width: 220px;
    height: 60px;
    display: block;
}
.khd_ios{
    position: absolute;
    left: 505px;
    top: 140px;
    width: 220px;
    height: 60px;
    display: block;
}
.sm{
    position: absolute;
    left: 750px;
    top: 55px;
    width: 130px;
    height: 130px;
    padding: 8px;
    display: block;
}
.sm img{
    width:100%;
    height:100%;
    display:block;
}
</style>