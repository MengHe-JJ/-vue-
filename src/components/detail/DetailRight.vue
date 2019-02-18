<template>
<div id="detail-right">
    <div class="seen">
        <div class="seeTit">看过的人还看</div>
        <div class="seeWrap clear">
            <ul>
                <li v-for="(val,key) in readbooks" @click="routQuery(key)">
                    <div>
                        <img :src="val.img" alt="" />
                        <h3>{{val.name}}</h3>
                        <p class="author">{{val.author}}</p>
                        <p class="eyes"><s></s>{{val.eyes}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- 看过人还看  结束 -->
    <div class="sellHot">
        <h3>同类热销榜</h3>
        <ul class="clear">
            <li :class='{"onShow":item.isActive}' v-for="(item,index) in sells" :key="index" @mouseover="sellOver(index)">
                <dl class="close">
                    <dt>{{index+1}}</dt>
                    <dd>
                        <span class="bookName">{{item.name}}</span>
                        <span class="num"><i>{{item.eyes}}</i><img src="../../assets/icon-eyes.png" alt="" /></span>
                    </dd>
                </dl>
                <dl class="open">
                    <dt>{{index+1}}</dt>
                    <dd>
                        <div class="bookPic" @click="linkTap(index)">
                           <img :src="item.img" alt="" />
                        </div>
                        <div class="bookCon">
                            <h3>{{item.name}}</h3>
                            <p>
                                <img src="../../assets/icon-eyes.png" height="18" width="12" alt="" />
                                {{item.eyes}}
                            </p>
                        </div>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
    <!-- 热销榜 结束 -->
</div>
</template>
<script>

export default{
    name:"detail-right",
    props:["readbooks","sells"],

    methods:{
        routQuery:function(index){
            this.$emit("acceptQuery",index);
        },
        sellOver:function(index){
            this.$emit("sellsTap",index);
        },
        linkTap:function(index){
            this.$emit("linksTap",index);
        }
    }
}
</script>
<style>
#detail-right{
    float:right;
    width:30.5%;
    background-color:#fff;
    font-family:"Microsoft yahei";
    text-align:left;
}
.seen{
    padding:43px 40px 0;
    border-bottom:1px solid #f0f0f0;
}
.seeTit{
    margin-bottom:32px;
    font-size:16px;
    color:#333;
    font-weight:600;
}
.seeWrap{
    width:255px;
    margin-bottom:18px;
}
.seeWrap li{
    width:105px;
    float:left;
    margin-right:15px;
    text-align:left;
}
.seeWrap li img{
    width:105px;
    height:140px;
    margin-bottom:10px;
}
.seeWrap li h3{
    color:#222;
    font-size:14px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    line-height:20px;
    margin-bottom:3px;
}
.seeWrap li p.author{
    font-size:12px;
    color:#999;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    line-height:20px;
}
.seeWrap li p.eyes{
    color:#999;
    font-size:12px;
    margin-bottom:20px;
}
.seeWrap li p.eyes s{
    float:left;
    width:16px;
    height:11px;
    background-image:url(../../assets/icon-eyes.png);
    background-repeat:no-repeat;
    background-size:100%;
    margin:4px 6px 0 0;
}
.sellHot{
    padding:40px 40px 43px;
    border-bottom:1px solid #f0f0f0;
}
.sellHot h3{
    font-size:16px;
    color:#333;
    font-weight:600;
    line-height:40px;
    margin-bottom:10px;
}
.sellHot li{overflow:hidden;}
.sellHot li.onShow .close,.sellHot li .open{
    display:none;
}
.sellHot li .close,.sellHot li.onShow .open{
    display:block;
}
.close dt,.open dt{
    text-align:right;
    width:6%;
    margin-right:3%;
    float:left;
    line-height:35px;
}
.close dd,.open dd{
    width:90%;
    border-bottom:1px solid #f0f0f0;
    float:right;
    text-align:left;
}
.close dd{
    height:35px;
    line-height:35px;
}
.close dd .bookName{
    width:72%;
    height:24px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    float:left;
}
.close dd .num{
    width:27%;
    font-size:12px;
    font-family:"arial";
    float:right;
    text-align:right;
}
.close dd .num img{
    width:18px;
    height:12px;
    float:right;
    margin:12px 3px 0 0;
}
.close dd .num i{float:right;}
.open .bookPic{
    width:63px;
    height:84px;
    display:block;
    border:1px solid #f0f0f0;
    float:left;
    margin:0 16px 16px 0;
}
.open .bookPic img{
    width:63px;
    height:84px;
}
.open .bookCon h3{
    color:#333;
    width:110px;
    max-height:36px;
    line-height:18px;
    font-size:14px;
    font-weight:normal;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
}
.open .bookCon p{
    font-size:12px;
    font-family:"arial";
    color:#999;
    margin-top:6px;
}
.open .bookCon img{
    width:18px;
    height:12px;
    float:left;
    margin-right:6px;
    margin-top:3px;
}
</style>