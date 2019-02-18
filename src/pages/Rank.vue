<template>
<div id="rank">
   <!--  <request></request> -->
    <index-header :nowIndex="2"></index-header>
    <plate-header v-if="publish" :title="publish.tit" :pubarr="publish.arr"></plate-header>
    <div class="clear rankList">
        <div class="rankCenter">
            <div class="plate-half last-half">
                <h3 class="plate-tit"><i class="shu"></i>编辑推荐</h3>
                <ul class="plate-list">
                  <list v-for="(val,index) in oneEdit" :key="index" :class="{'act':val.isActive}" @listTap="firstEdit(index)" :item="val" :num="index"></list>
                </ul>
            </div>
            <div class="plate-half last-half">
               <h3 class="plate-tit"><i class="shu" style="background-color:#f26552"></i>热销榜</h3>
               <ul class="plate-list">
                 <list v-for="(val,index) in oneHot" :key="index" :class="{'act':val.isActive}" @listTap="firstHot(index)" :item="val" :num="index"></list>
               </ul>
           </div>
           <div class="plate-half last-half">
               <h3 class="plate-tit"><i class="shu" style="background-color:#f26552"></i>新书上榜</h3>
               <ul class="plate-list">
                 <list v-for="(val,index) in oneNew" :key="index" :class="{'act':val.isActive}" @listTap="firstNew(index)" :item="val" :num="index"></list>
               </ul>
           </div>
        </div>
    </div>
    <!-- 以上是出版图书 -->
    <plate-header v-if="boyChannel" :title="boyChannel.tit" :pubarr="boyChannel.arr"></plate-header>
    <div class="clear rankList">
        <div class="rankCenter">
            <div class="plate-half last-half">
                <h3 class="plate-tit"><i class="shu"></i>编辑推荐</h3>
                <ul class="plate-list">
                  <list v-for="(val,index) in rankEdit" :key="index" :class="{'act':val.isActive}" @listTap="EditPlate(index)" :item="val" :num="index"></list>
                </ul>
            </div>
            <div class="plate-half last-half">
               <h3 class="plate-tit"><i class="shu" style="background-color:#f26552"></i>热销榜</h3>
               <ul class="plate-list">
                 <list v-for="(val,index) in rankBoy" :key="index" :class="{'act':val.isActive}" @listTap="boyPlate(index)" :item="val" :num="index"></list>
               </ul>
           </div>
           <div class="plate-half last-half">
               <h3 class="plate-tit"><i class="shu" style="background-color:#f26552"></i>新书上榜</h3>
               <ul class="plate-list">
                 <list v-for="(val,index) in rankGirl" :key="index" :class="{'act':val.isActive}" @listTap="girlPlate(index)" :item="val" :num="index"></list>
               </ul>
           </div>
        </div>
    </div>
    <!-- 以上是男生频道 -->
    <common-footer></common-footer>

</div>
</template>
<script>
import IndexHeader from '../components/IndexHeader'
import CommonFooter from '../components/CommonFooter'
import List from '../components/common/List'
import PlateHeader from '../components/index/PlateHeader'
import {sortKey,Request} from '../util/common.js'

export default{
    data:()=>{
       return{
         publish:{tit:'出版图书',arr:["——排行榜——"]},
         boyChannel:{tit:'男生频道',arr:["——排行榜——"]},
         girlChannel:{tit:'女生频道',arr:["——排行榜——"]},
         editHot:[],
         boyHot:[],
         girlHot:[]
       }
    },
    computed:{
        rankEdit:function(){
           this.editHot=this.$store.state.bookarr.slice(0,10);
            return this.$store.state.bookarr.slice(0,10);
        },
        oneEdit:function(){
          return this.$store.state.bookarr.slice(0,10).reverse();
        },
        oneHot:function(){
          return this.$store.state.boyarr.slice(0,10).reverse();
        },
        oneNew:function(){
          return this.$store.state.girlarr.slice(0,10).reverse();
        },
        rankBoy:function(){
            return this.$store.state.boyarr.slice(0,10);
        },
        rankGirl:function(){
            return this.$store.state.girlarr.slice(0,10);
        }
    },
    components:{
        IndexHeader,
        CommonFooter,
        List,
        PlateHeader
    },
    methods:{
      firstEdit:function(index){
        this.oneEdit.forEach((item)=>{
            item.isActive=false
        })
        this.oneEdit[index].isActive=true
      },
      firstHot:function(index){
        this.oneHot.forEach((item)=>{
            item.isActive=false
        })
        this.oneHot[index].isActive=true
      },
      firstNew:function(index){
        this.oneNew.forEach((item)=>{
            item.isActive=false
        })
        this.oneNew[index].isActive=true
      },
      EditPlate:function(index){
        this.rankEdit.forEach((item)=>{
            item.isActive=false
        })
        this.rankEdit[index].isActive=true
      },
      boyPlate:function(index){
        this.rankBoy.forEach((item)=>{
            item.isActive=false
        })
        this.rankBoy[index].isActive=true
      },
      girlPlate:function(index){
        this.rankGirl.forEach((item)=>{
            item.isActive=false
        })
        this.rankGirl[index].isActive=true
      },
    },
    created:function(){
        Request(this);
    },
    mounted:function(){

    }
}

</script>
<style >
@import "../assets/css/list.css";
.rankList{
    background-color:#fff;
    margin:10px 0;
}
.rankCenter{
    width:1200px;
    margin:0 auto;
    text-align:left;
    font-family:"Microsoft yahei";
}
.plate-tit{
    padding-left:0;
}
.plate-tit .shu{
    width:4px;
    height:20px;
    border-radius:50px;
    background-color:#03a9f4;
    float:left;
    margin-right:10px;
    margin-top:6px;
    display:inline-block;
}
</style>