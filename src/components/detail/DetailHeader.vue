<template>
<div id="detail-header" class="clear" >
<div v-if="details">
    <div class="bookL">
        <s>心灵鸡汤</s>
        <router-link to="#">
            <img :src="details.img" alt="" />
        </router-link>
        <img class="shadow" src="../../assets/shadow.gif" alt="" />
    </div>
    <div class="bookR">
        <div class="bookinf01" >
            <h2>{{details.name}}</h2>
            <p>
                <span>作者：{{details.author}}</span>
                <span>字数：{{details.wordNum}}字</span>
                <span>{{details.house}}</span>
            </p>
        </div>
        <div class="bookinf02">
            <div class="left">
                <p>价格：{{details.price}}阅饼 </p>
                <div>
                    <router-link to="" class="tryRead">免费试读</router-link>
                    <button class="buyBook" @click="chaseTap()">购买</button>
                </div>
            </div>
            <div class="right">
                <img class="look_phone" src="../../assets/look_phone.jpg" height="75" width="75" alt="" />
                <img class="look_ewm" src="../../assets/untitled.png" height="304" width="304" alt="" />
            </div>
        </div>
        <div class="bookinf03">
            <p>{{details.con}}</p>
            <div class="shareWrap">
                <span class="fr"><i>收起</i><s></s></span>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
 export default{
    name:'detail-header',
    props:['details'],
    methods:{
       chaseTap:function(){
        this.$emit("purTap");
       }
    }
 }
</script>
<style lang="css" scoped>
#detail-header{
    width:1000px;
    background-color:#fff;
    margin:20px auto;
    font-family:"Microsoft yahei";
}
.bookL{
    float:left;
    width:26.9%;
    position:relative;
}
.bookR{
    float:left;
    width:73.1%;
    overflow:hidden;
    padding-bottom:27px;
    border-left:1px solid #f0f0f0;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
}

.bookL s{
    width:58px;
    height:23px;
    line-height:18px;
    position:absolute;
    left:0px;
    background-position:0 0;
    margin:11px 0 0 -5px;
    color:#fff;
    padding-left:22px;
    padding-right:6px;
    text-decoration:none;
}
.bookL a img{
    margin: 68px auto 0;
    width: 156px;
    height: 208px;
    display: block;
    position: relative;
    z-index: 1;
}
.bookL .shadow{
    position:absolute;
    left:32px;
    top:273px;
}
.bookinf01{
    padding:22px 40px 0 30px;
    height:72px;
    border-bottom:1px solid #f0f0f0;
    text-align:left;
}
.bookinf01 h2{
    margin-bottom:8px;
    color:#212121;
    overflow:hidden;
    max-width:438px;
    height:30px;
    line-height:30px;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-weight:normal;
    font-size:20px;
}
.bookinf01 p span{
    margin-right:12px;

}
.bookinf02{
    padding:24px 40px 0 30px;
    height:98px;
    border-bottom:1px solid #f0f0f0;
}
.left{
    float:left;
    width:180px;
    margin-top:4px;
    text-align:left;
}
.left p{
    margin-bottom:18px;
    width:300px;
    color:#212121;
}
.tryRead,.buyBook{
    line-height:30px;
    text-align:center;
    color:#fff;
    border-radius:3px;
    cursor:pointer;
    display:inline-block;
}
.tryRead{
    width:80px;
    height:30px;
    background-color:#8bc34a;
}
.buyBook{
    height:30px;
    width:55px;
    background-color:#f26552;
    margin-left:6px;
}
.right{
    float:right;
    width:164px;
    overflow:hidden;
}
.look_phone{
    float:left;
    width:75px;
    height:75px;
}
.look_ewm{
    float:right;
    width:85px;
    height:85px;
    overflow:hidden;
    margin:-4px;
}
.bookinf03{
    padding:24px 40px 0 30px;
}
.bookinf03 p{
    line-height:18px;
    height:54px;
    overflow:hidden;
    text-align:left;
    margin-bottom:13px;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:10;
}
.shareWrap span s{
    display:inline-block;
    width:13px;
    height:7px;
    margin-left:5px;
    background-position:-71px -25px;
}
.shareWrap span.all s{
    background-position:-81px -71px;
}


</style>