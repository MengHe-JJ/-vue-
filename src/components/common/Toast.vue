<template>
<div id="toast" :style="{display:showDis}">
<div class="buyTan">
    <div class="off"><s @click="buyHide()"></s></div>
    <div class="howBuy clear">
        <div class="howBuyL">
            <a href=""><img :src="bbb" alt="超级制造商"></a>
            <img src="../../assets/shadow.gif" class="shadow">
            <p>
                <i class="price">价格：{{buyPrice}}阅饼/千字</i>
            </p>
        </div>
        <div class="howBuyR">
            <h3>请下载掌阅客户端购买</h3>
            <div>
                <img class="buyTanEvm" src="../../assets/look_phone.jpg">
                <span class="buyTanEvm">
                    <img src="../../assets/untitled.png" alt="扫一扫" >
                </span>
            </div>
            <p>目前 www.iReader.com 支持在线试读，如需购买请下载掌阅手机客户端。</p>
        </div>
    </div>
</div>
</div>
</template>
<script>
    export default{
        name:"toast",
        props:["buyPrice","showDis","bbb"],
        methods:{
            buyHide:function(){
                this.$emit("buyhide");
            }
        }
    }
</script>
<style lang="css">
#toast{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:98;
    background-color:rgba(0, 0, 0, 0.6);
}
.buyTan{
    width:654px;
    height:388px;
    background-color:#fff;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -327px;
    margin-top: -194px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.3);
    z-index:99;
    border-radius:2px;
}
.buyTan .off{
    width:639px;
    height:41px;
    padding:15px 15px 0 0;
}
.off s{
    width:15px;
    height:15px;
    float:right;
    cursor:pointer;
    background-position:-18px -125px;
}
.howBuy{
    padding:0 0 0 56px;
    overflow:hidden;
}
.howBuy .howBuyL{
    width:203px;
    height:265px;
    padding:12px 30px 0 0;
    border-right:1px solid #f0f0f0;
    margin-right:32px;
    float:left;
}
.howBuy .howBuyR{
    width:248px;
    height:277px;
    float:left;
    padding:0 0 0 16px;
}
.howBuyL a{
    width: 156px;
    height: 208px;
    display: block;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    border:1px solid #eee;
}
.howBuyL a img{
    width:100%;
    height:100%;
}
.howBuyL .shadow{
    width:100%;
}
.howBuyL p{
    text-align: center;
    margin-top: 20px;
}
.howBuyL p .price{
    color:#212121;
    margin-right:10px;
}
.howBuyR h3{
    font-size:20px;
    color:#212121;
    padding:18px 0 0 0;
    text-align:center;
    height:68px;
}
.howBuyR .howTanPh{
    width:113px;
    height:113px;
    margin-right:18px;
}
.buyTanEvm{
    width:113px;
    height:113px;
   /* overflow:hidden;*/
}
.buyTanEvm img{
    width:125px;
    height:125px;
    margin-left:-6px;
}
.howBuyR p{
 text-align: center;
 margin-top:34px;
 line-height:16px;
}
</style>