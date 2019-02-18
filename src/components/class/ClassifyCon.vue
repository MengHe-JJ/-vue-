<template>
<div id="classify-con">
    <div class="showTit clear">
        <span :class="{'hot':true, 'current':item.isAct}" v-for="(item,idx) in titarr" :key="idx" @click.prevent="titTap(idx)"><router-link to="#">{{item.name}}</router-link></span>
        <p>
            <label class="left" @click="minusTap()"><s></s></label>
            第{{num}}页
            <label class="right" @click="num++"><s></s></label>
        </p>
    </div>
    <ul class="show clear">
        <li v-for="(val,index) in showarr" :key="index">
            <router-link :to="{path:'/page',query:{intends:showarr[index]}}">
                <img :src="val.img" alt="" />
            </router-link>
            <div class="bookMation">
                <h3>{{val.name}}</h3>
                <p class="tryread">{{val.author}}
                    <router-link :to="{path:'/page',query:{intends:showarr[index]}}">试读</router-link>
                </p>
                <span><s></s>{{val.eyes}}</span>
                <p class="introduce">{{val.con}}</p>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
export default{
    name:"classify-con",
    data:()=>{
        return{
            num:1,
            titarr:[
                {name:'热门',isAct:true},
                {name:'最新',isAct:false},
                {name:'好评',isAct:false}
            ]
        }
    },
    props:['showarr'],
    methods:{
        titTap:function(i){
            this.titarr.map(function(val){
                val.isAct=false;
            })
            this.titarr[i].isAct=true;
        },
        minusTap:function(e){//向前翻页
            this.num--;
            if(this.num<1){
                alert("已到达第一页")
                return this.num=1;
            }
        }

    }

}
</script>
<style>
#classify-con{
    width:1000px;
    margin:0 auto;
    overflow:hidden;
    text-align:left;
    font-family:"Microsoft yahei";
}
.showTit{
    height:41px;
    margin-top:23px;
}
.showTit span{
    width:114px;
    height:40px;
    line-height:40px;
    text-align:center;
    border-radius:3px;
    font-size:14px;
    float:left;
    background:#f8f8f8;
}
.showTit span.current{
    background:#fff;
    height:41px;
}
.showTit span a{
    display:block;
    overflow:hidden;
    color:#999;
}
.showTit p{
    width:144px;
    height:34px;
    line-height:34px;
    text-align:center;
    letter-spacing:1px;
    float:right;
    letter-spacing:3px;
}
.showTit p a,.showTit p label{
    float:left;
    width:32px;
    height:36px;
    line-height:38px;
    text-align:center;
    border:1px solid #f0f0f0;
    border-radius:3px;
    display:inline-block;
    background-color:#fff;
}
.showTit p .right{
    float:right;
}
.showTit s{
    background:url(../../assets/listIcon.png) no-repeat;
    width:7px;
    height:11px;
    display:inline-block;
}
.showTit .left s{
    background-position:0 -38px;
}
.showTit p .right s{
    background-position:0 -50px;
}
.show{
    width:930px;
    overflow:hidden;
    background-color:#fff;
    padding:42px 35px 0;
}
.show li{
    padding:0 20px;
    margin-bottom:40px;
    overflow:hidden;
    float:left;
}
.show li img{
    float:left;
    width:105px;
    height:140px;
    border:1px solid #f0f0f0;
    margin-right:14px;
}
.bookMation{
    width:148px;
    height:142px;
    float:left;
}
.bookMation h3{
    width:100%;
    height:27px;
    margin-bottom:10px;
    border-bottom:1px solid #f0f0f0;
    font-size:14px;
    color:#333;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.bookMation .tryread{
    line-height:22px;
    margin-bottom:2px;
}
.bookMation .tryread a{
    width:34px;
    height:22px;
    line-height:22px;
    text-align:center;
    color:#fff;
    float:right;
    background-color:#f26552;
    border-radius:3px;
}
.bookMation span s{
    background:url(../../assets/icon-eyes.png) no-repeat;
    background-size:100%;
    width:14px;
    height:10px;
    margin:4px 6px 4px 0;
    display:inline-block;
    float:left;
}
.bookMation .introduce{
    width:100%;
    height:48px;
    line-height:16px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    margin-top:8px;
}
</style>