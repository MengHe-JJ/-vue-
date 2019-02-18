<template>
<div id="index-header">
  <div class="header-container">
    <div class="header-md3">
          <img class="logo" src="../assets/web-logo.png" />
    </div>
    <div class="header-md9">
      <div class="search fr">
        <label class="header-search fl">
            <input type="text" placeholder="书名" v-model="searchTxt" value="" />
            <img class="searchBtn" src="../assets/search.png" v-on:click="searchFor()" />
        </label>
        <button type="button" class="header-btn">登录</button>
      </div>
      <ul class="headerNav fr">
          <li :class="{'act':index==nowIndex}" v-for="(nav,index) in navArr" :key="index">
            <router-link :to="nav.url">{{nav.name}}</router-link>
          </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {state} from 'vuex'

  export default {
    name: 'index-header',
    data:()=>{
        return{
          navArr:[
            {name:'首页',url:'/'},
            {name:'分类',url:'/classify'},
            {name:'排行',url:'/rank'},
            {name:'征文大赛',url:'#未开通'},
            {name:'下载',url:'/download'}
          ],
        }
      },
      props:['nowIndex'],
      computed:{
        searchTxt:{
          get:function(){
            return this.$store.state.searchVal
          },
          set:function(newVal){
            this.$store.commit("setVal",newVal)
          }
        }
      },
    methods:{
      searchFor:function(){
        // console.log(this.searchTxt,111);
        this.$router.push({path:'/search'})
      }
    }
  }
</script>

<style lang="css" scoped>
#index-header{
    background-color:#fff;
    height:70px;
    box-shadow:0 1px 2px rgba(0, 0, 0,0.3);
    -webkit-box-shadow:0 1px 2px rgba(0,0,0,0.3);
    margin-bottom:1px;
}
.header-container{
    width:1200px;
    margin:0px auto;
    overflow:hidden;
    position:relative;
}
.header-container::after{
  content:"";
  display:block;
  visibility:hidden;
  clear:both;
  height:0;
}
.header-md3{
  width:25%;
  float:left;
  height:70px;
  vertical-align:middle;
  margin:16px 0;
}
.header-md9{
  width:75%;
  float:left;
  margin:16px 0;
}
.logo{
    width:170px;
    display:block;
    height:auto;

}
.headerNav li{
    float:left;
    padding:0 12px;
    font-size:16px;
    line-height:32px;
}
.headerNav li a{
   color:#333;
}
.headerNav li.act a{
    color:#f26552;
}
.header-search{
    position:relative;
    width:200px;
    height:32px;
    border-radius:19px;
    overflow:hidden;
    display:block;
    border:1px solid #ccc;
    margin-left:10px;
    margin-right:10px;
    background-color:transparent;
}
.searchBtn{
    width:18px;
    height:auto;
    display:block;
    position:absolute;
    top:8px;
    right:10px;
}
.header-search input{
    width:100%;
    height:100%;
    line-height:32px;
    display:block;
    padding:0 30px 0 8px;
    font-size:14px;
    background-color:#fff;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    font-family:"Microsoft yahei";
    outline:none;
    border:none;
}
.header-btn{
  border:1px solid #ccc;
  color:#888;
  font-size:14px;
  line-height:30px;
  padding:0 15px;
  background-color:#fff;
  border-radius:6px;
  float:left;
  margin-left:10px;
}
</style>
