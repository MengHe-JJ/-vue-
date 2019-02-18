
<template>
  <div id="home">
    <index-header :nowIndex="0"></index-header>
    <swiper-banner></swiper-banner>
    <plate-header v-if="publish" :title="publish.tit" :pubarr="publish.arr"></plate-header>
    <div class="home-list clear mb">
      <list-one :design="first"></list-one>
      <list-two :studyarr="showarr"></list-two>
      <div class="plate-half last-half">
        <h3 class="plate-tit"><img class="icon-boom" src="../assets/icon-boom.png" />畅销榜</h3>
        <ul class="plate-list">
          <list v-for="(val,index) in books" :key="index" :class="{'act':val.isActive}" @listTap="plateList(index)" :item="val" :num="index"></list>
        </ul>
      </div>
    </div>
    <!-- 以上是出版图书 -->
    <plate-header v-if="circleArr" :title="circleArr.tit" :pubarr="circleArr.arr"></plate-header>
   <book-circle></book-circle>
   <!-- 以上是精选圈子 -->
    <plate-header v-if="manArr" :title="manArr.tit" :pubarr="manArr.arr"></plate-header>
    <div class="home-list clear mb">
      <list-one :design="manFirst"></list-one>
      <list-three :studyarr="manarr"></list-three>
      <div class="plate-half last-half">
        <h3 class="plate-tit"><img class="icon-boom" src="../assets/icon-boom.png" />畅销榜</h3>
        <ul class="plate-list">
          <list v-for="(val,index) in manbooks" :key="index" :class="{'act':val.isActive}" @listTap="manTap(index)" :item="val" :num="index"></list>
        </ul>
      </div>
    </div>
  <!-- 以上是男生频道 -->
  <plate-header v-if="girlArr" :title="girlArr.tit" :pubarr="girlArr.arr"></plate-header>
    <div class="home-list clear mb">
      <list-one :design="girlFirst"></list-one>
      <list-three :studyarr="girlarr"></list-three>
      <div class="plate-half last-half">
        <h3 class="plate-tit"><img class="icon-boom" src="../assets/icon-boom.png" />畅销榜</h3>
        <ul class="plate-list">
          <list v-for="(val,index) in girlbooks" :key="index" :class="{'act':val.isActive}" @listTap="girlTap(index)" :item="val" :num="index"></list>
        </ul>
      </div>
    </div>
  <!-- 以上是女生频道 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import SwiperBanner from '../components/index/SwiperBanner'
import PlateHeader from '../components/index/PlateHeader'
import BookCircle from '../components/index/BookCircle'
import CommonFooter from '../components/CommonFooter'
import ListOne from '../components/index/ListOne'
import ListTwo from '../components/index/ListTwo'
import ListThree from '../components/index/ListThree'
import List from '../components/common/List'


export default {
  name: 'home',
  data(){
    return{
      publish:{tit:'出版图书',arr:['小说','励志成功','文学','经济管理','更多']},
      circleArr:{tit:'精选圈子'},
      manArr:{tit:"男生频道",arr:['玄幻','奇幻','武侠','仙侠','更多']},
      girlArr:{tit:"女生频道",arr:['现代言情','古代言情','幻想言情','青春校园','更多']},
      books:[],
      first:{},
      showarr:[],
      manbooks:[],
      manarr:[],
      manFirst:{},
      girlbooks:[],
      girlarr:[],
      girlFirst:{}
    }
  },
  components:{
    IndexHeader,
    SwiperBanner,
    PlateHeader,
    ListOne,
    ListTwo,
    ListThree,
    List,
    BookCircle,
    CommonFooter
  },
  methods:{
    plateList:function(index){
        for(var i=0;i<this.books.length;i++){
              this.books[i].isActive=false;
        }
        this.books[index].isActive=true;
    },
    manTap:function(index){
      for(var i=0;i<this.manbooks.length;i++){
          this.manbooks[i].isActive=false;
      }
      this.manbooks[index].isActive=true;
    },
    girlTap:function(index){
      for(var i=0;i<this.girlbooks.length;i++){
          this.girlbooks[i].isActive=false;
      }
      this.girlbooks[index].isActive=true;
    }
  },
  mounted:function(){
    var that=this;

    that.$http.get('../../../static/books.json').then((res)=>{
      that.books=res.data.books.slice(0,10);
      that.manbooks=res.data.boyBook.slice(0,10);
      that.girlbooks=res.data.girlbooks.slice(0,10);

      that.books.map(function(item){
        that.$set(item,'isActive',false)
      })
      that.manbooks.map(function(item){
        that.$set(item,'isActive',false)
      })
      that.girlbooks.map(function(item){
        that.$set(item,'isActive',false)
      })
       that.books[0].isActive=true;
       that.manbooks[0].isActive=true;
       that.girlbooks[0].isActive=true;
      that.first=that.books[0];
      that.manFirst=that.manbooks[1];
      that.girlFirst=that.girlbooks[0];
      that.showarr=that.books.slice(0,4)
      that.manarr=that.manbooks.slice(0,6)
      that.girlarr=that.girlbooks.slice(0,5)
      //console.log(this.girlbooks)
      //console.log(that.books,"books")
     /* this.$store.commit('setbook',that.books)
      this.$store.commit('setgirl',that.girlbooks)
      this.$store.commit('setboy',that.manbooks)*/
    })
  }
}
</script>

<style>
@import "../assets/css/list.css";
  .home-list{
    width:1200px;
    margin:0 auto 20px;
    background-color:#fff;
    position:relative;
    text-align:left;
    font-family:"Microsoft yahei";
  }
</style>
