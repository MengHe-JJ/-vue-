<template>
<div id="detail-eval">
    <div class="title">
        <p>
            <span class="shuquan">书圈</span>
            <span class="line">|</span>
            <span>共178人，26条</span>
        </p>
        <div class="comBtn">
            <s></s><span>我来说两句</span>
        </div>
    </div>
    <div class="allCom">
        <ul>
            <li v-for="(item,index) in comments" :key="index">
                <span class="headImg">
                    <img :src="item.headurl" alt="" />
                </span>
                <div class="bookAll">
                    <div class="comMan clear">
                        <p>{{item.name}}</p>
                        <span class="lv">{{item.class}}</span>
                        <span class="vip" v-if="item.vip==1">VIP</span>
                        <span class="fr">15天前</span>
                    </div>
                    <div class="comStar" v-if="item.star>0">
                        <img v-for="n in item.star" src="../../assets/yStar.png" height="15" width="15" alt="" />
                    </div>
                    <div class="comTxt">
                        <s>书评</s>
                        <span>{{item.content}}</span>
                    </div>
                    <div class="attend">
                        <span class="zan clear">
                            <img src="../../assets/zan.gif" height="24" width="24" alt="" />
                            <i>{{item.zan}}</i>
                        </span>
                        <span class="line">|</span>
                        <span class="huifu clear">
                            <img src="../../assets/hf.gif" height="24" width="26" alt="" />
                            <i>{{item.hf}}</i>
                        </span>
                    </div>
                </div>
            </li>
            <!-- <li>
                <span class="headImg">
                    <img src="http://book.img.ireader.com/group6/M00/63/BD/CmQUOFhD59qEekyMAAAAABo4_rY393315710.jpg?v=totM5Lib" alt="" />
                </span>
                <div class="bookAll">
                    <div class="comMan clear">
                        <p>心飞雨</p>
                        <span class="lv">LV7</span>
                        <span class="vip">VIP</span>
                        <span class="fr">2018-10-19</span>
                    </div>
                    <div class="comStar">
                        <img src="../../assets/yStar.png" height="15" width="15" alt="" />
                        <img src="../../assets/yStar.png" height="15" width="15" alt="" />
                        <img src="../../assets/yStar.png" height="15" width="15" alt="" />
                        <img src="../../assets/yStar.png" height="15" width="15" alt="" />
                        <img src="../../assets/yStar.png" height="15" width="15" alt="" />
                    </div>
                    <div class="comTxt">
                        <s>书评</s>
                        <span>这是一本非常棒的书，讲述了原生家庭对一个人成长的影响，其一就是对一个人身心的伤害。在原生家庭中不被肯定，得不到恰当的关爱的人，最终都会通过过量的食物来满足自己。所以，每一个胖子内心，大多都有一段伤感的历史，至少都曾自卑过。想要减肥，就要勇于面对自己，和内心的执念和解，迈出轻身的第一步。减肥的过程与一个人的意志力有很大的关系，当你战胜了可怕的食欲时，也就意味着你拥有着强大的意志力去改变人生的其他。世界上不存在一劳永逸的事情，要把减肥的时间限定由“一阵子”改为“一辈子”。一直做自己身体的主人，做自己人生的掌控者。</span>
                    </div>
                    <div class="attend">
                        <span class="zan clear">
                            <img src="../../assets/zan.gif" height="24" width="24" alt="" />
                            <i>18</i>
                        </span>
                        <span class="line">|</span>
                        <span class="huifu clear">
                            <img src="../../assets/hf.gif" height="24" width="26" alt="" />
                            <i>8</i>
                        </span>
                    </div>
                </div>
            </li> -->
        </ul>
        <div class="loadMore">查看更多</div>
    </div>
</div>
</template>
<script>
    export default{
        name:"",
        props:["comments"]
    }
</script>
<style>
#detail-eval{
    float:left;
    width:69.5%;
    border-right:1px solid #f0f0f0;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    text-align:left;
    background-color:#fff;
    font-family:"Microsoft yahei";
}
.title{
    width:100%;
    height:92px;
    border-bottom:1px solid #f0f0f0;
    padding:34px 40px 0 40px;
    box-sizing:border-box;
}
.title p{
    float:left;
    width:210px;
    padding:5px 0 0 0;
    text-align:left;
}
.title p span{
    color:#9e9e9e;
    font-size:14px;
}
.title p .shuquan{
    font-size:16px;
    color:#333;
    font-weight:600;
}
.title p .line{
    font-size:16px;
    color:#f0f0f0;
    margin:0 8px;
}
.comBtn{
    width:98px;
    height:25px;
    line-height:25px;
    float:right;
    color:#fff;
    background-color:#8bc34a;
    border-radius:3px;
}
.comBtn s{
    float:left;
    width:12px;
    height:12px;
    background-position:-86px -25px;
    margin:6px 6px 0 9px;
}
.allCom{
    overflow:hidden;
    display:block;
    border-bottom:1px solid #f0f0f0;
    padding:4px 40px 0 0;
}
.allCom ul{
    padding-left:40px;
    min-height:1044px;
}
.allCom ul li{
    padding-top:32px;

    position:relative;
    min-height:60px;
}
.allCom ul li::after{
    content:"";
    height:0;
    display:block;
    visibility:hidden;
    clear:both;
}
.headImg{
    position:absolute;
    top:32px;
    left:0;
    width:50px;
    height:50px;
    display:block;
}
.headImg img{
    width:100%;
    height:100%;
    border-radius:50%;
}
.bookAll{
    float:right;
    margin-left:60px;
    width:540px;
    border-bottom:1px solid #f0f0f0;
    padding:4px 0 0;
    min-height:60px;
}
.bookAll .comMan{
    margin:0 0 11px 0;
}
.comMan p{
    max-width:330px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-size:14px;
    color:#6b6b6b;
    line-height:18px;
    margin-right:20px;
    float:left;
}
.comMan .lv,.comMan .vip{
    display:inline-block;
    height:18px;
    line-height:18px;
    text-align:center;
    background-color:#d2d2d2;
    color:#fff;
    width:36px;
}
.comMan .lv{
    margin:0 6px 0 0;
}
.comMan .vip{
    margin:0 6px 0 0;
}
.comMan span.fr{
    color:#9e9e9e;
}
.comStar{
    height:27px;
    background-color:#fafafa;
    margin:0 0 8px 0;
    padding:9px 0 0 12px;
    text-align:left;
}
.comStar img{
    margin-right:2px;
}
.comTxt{
    padding-top:7px;
    margin-bottom:13px;
    overflow:hidden;
}
.comTxt s{
    width:30px;
    height:18px;
    background-position:0 -68px;
    text-decoration:none;
    color:#fff;
    line-height:18px;
    padding-left:4px;
    display:inline-block;
    margin:2px 7px 0 0;
    float:left;
}
.comTxt span{
    color:#888;
    font-size:14px;
    line-height:22px;
    display:inline;
}
.attend{
    margin-bottom:12px;
}
.attend span{
    display:inline-block;
}
.attend .zan img{
    width:12px;
    height:12px;
    margin:0 4px 0 0;
    vertical-align:middle;
    float:left;
}
.attend .huifu img{
    width:13px;
    height:12px;
    margin:1px 4px 0 0;
    vertical-align:middle;
    float:left;
}
.attend i{
    line-height:12px;
    margin-right:4px;
    color:#999;
    display:inline-block;
    float:left;
}
.attend .line{
    margin:0 12px 0 8px;
    line-height:12px;
    background-color:#eee;
    color:#f0f0f0;
    font-weight:normal;
}
.loadMore{
    text-align:center;
    width:615px;
    height:48px;
    background-color:#fafafa;
    font-size:14px;
    color:#999;
    line-height:48px;
    margin:36px auto;
}
</style>