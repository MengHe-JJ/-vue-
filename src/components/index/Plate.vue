<template>
    <div id="plate" class="clear">
        <!-- <div class="plate-half" v-if="design">
            <h3>{{design.name}}<span>作者：{{design.author}}</span></h3>
            <p>{{design.desc}}</p>
            <div class="plate-img"><router-link :to="{path:'/page',query:{intends:design}}">
                <img :src="design.img" alt="" /></router-link>
            </div>
        </div> -->
       <!--  <div class="plate-half">
            <div class="plate-md6" v-for="(item,key) in studyarr" :key="key">
                <router-link :to="{path:'/page',query:{intends:studyarr[key]}}">
                    <img :src="item.img" alt="" />
                    <h3>{{item.name}}</h3>
                    <p>{{item.author}}</p>
                </router-link>
            </div>
        </div> -->
        <list :tit="listTit" :giftId="arrTit"></list>
       <!--  <div class="plate-half">
           <h3 class="plate-tit"><img class="icon-boom" src="../../assets/icon-boom.png" />畅销榜</h3>
           <ul class="plate-list">
               <li v-for="(item,index) in actArr" :key="index" :class="{'act':item.isActive}" @mouseover="plateAct(index)">
                   <div class="altas-num">{{index+1}}</div>
                   <div class="altas clear">
                       <router-link to="/page">
                           <img class="altas-img" :src="item.img" alt="" />
                           <div lass="altas-main">
                               <h3>{{item.name}}</h3>
                               <p class="altas-eyes"><img src="../../assets/icon-eyes.png" />{{item.eyes}}</p>
                           </div>
                       </router-link>
                   </div>
                   <div class="altas-txt">
                       <router-link to="/page">{{item.name}}</router-link>
                       <p class="fr altas-eyes"><img src="../../assets/icon-eyes.png" />{{item.eyes}}</p>
                   </div>
               </li>
           </ul>
       </div> -->
    </div>

</template>
<script>
import List from '../common/List'
export default{
    name:'plate',
    data(){
        return{
            listTit:'畅销榜'
        }
    },
    components:{
        List
    },
    props:['design','studyarr','arrTit'],

    mounted:function(){

    }
}
</script>
<style scoped>
#plate{
    width:1200px;
    margin:0 auto ;
    background-color:#fff;
    position:relative;
    text-align:left;
    font-family:"Microsoft yahei";
}
.plate-half{
    width:33.3%;
    border-right:1px solid #ccc;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    float:left;
    height:547px;
    position:relative;
}
.plate-half:first-child{
    padding:30px 30px 30px 40px;
}
/*.plate-half:last-child{
    border-right:0px;
}*/
.plate-half>h3{
    font-weight:normal;
    line-height:32px;
    font-size:22px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
}
.plate-half>h3 span{
    color:#888;
    font-size:14px;
    display:block;
}
.plate-half>p{
    margin-top:10px;
    color:#888;
    font-size:14px;
    line-height:22px;
    margin-bottom:20px;
    display:-webkit-box;
    text-overflow:ellipsis;
    word-break:break-all;
    -webkit-line-clamp:5;
    -webkit-box-orient:vertical;
    overflow:hidden;
}
.plate-img{
    width:100%;
    text-align:right;
    margin-top:60px;
    position:absolute;
    bottom:40px;
    right:30px;
}
.plate-img img{
    width:200px;
}
.plate-md6{
    float:left;
    width:50%;
    text-align:center;
    padding:40px 20px;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
}
.plate-md6:nth-child(1){
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
.plate-md6:nth-child(2){
    border-bottom:1px solid #ccc;
}
.plate-md6:nth-child(3){
    border-right:1px solid #ccc;

}


.plate-md6 img{
    max-width:100%;
    height:140px;
    margin-bottom:10px;
}
.plate-md6 a>h3{
    font-size:14px;
    font-weight:normal;
    color:#333;
}
.plate-md6 p{
    font-size:14px;
    color:#888;
}


</style>