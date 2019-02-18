<template>
<div id="page">
    <index-header></index-header>
    <detail-header :details="intends" @purTap="buyTap"></detail-header>
    <div class="clear bookCir">
        <detail-eval :comments="evalarr"></detail-eval>
        <detail-right :readbooks="lookBooks" @acceptQuery="raQuery" :sells="sellarr" @sellsTap="sellQuery" @linksTap="UrlTap"></detail-right>
    </div>
    <common-footer></common-footer>
    <toast :showDis="showTrue" :buyPrice="buyPrix" :bbb="buyBimg" @buyhide="buyClose"></toast>
</div>
</template>
<script>
import IndexHeader from '../components/IndexHeader'
import DetailHeader from '../components/detail/DetailHeader'
import DetailEval from '../components/detail/DetailEval'
import DetailRight from '../components/detail/DetailRight'
import CommonFooter from '../components/CommonFooter'
import Toast from '../components/common/Toast'
import {Request} from "../util/common.js"

export default{
    name:'page',
    data(){
        return{
            evalarr:[],
            showTrue:'none',
            buyPrix:"",
            buyBimg:'',
            intends:""
        }
    },
    computed:{
        lookBooks:function(){
            return this.$store.state.lookarr.slice(0,4);
        },
        sellarr:function(){
            return this.$store.state.bookarr.slice(0,10)
        }
    },
    components:{
        IndexHeader,
        DetailHeader,
        DetailEval,
        DetailRight,
        CommonFooter,
        Toast
    },
    methods:{
        buyTap:function(){
            this.buyPrix=this.intends.price
            this.buyBimg=this.intends.img
            this.showTrue="block";
        },
        buyClose:function(){
            this.showTrue="none";
        },
        raQuery:function(index){
            this.intends=this.lookBooks[index];
            console.log(this.lookBooks[index],"zuo");
        },
        sellQuery:function(index){
           var leng=this.sellarr.length;
             for(var i=0;i<leng;i++){
                this.sellarr[i].isActive=false;
            }
            this.sellarr[index].isActive=true;
        },
        UrlTap:function(index){
            this.intends=this.sellarr[index];
            document.documentElement.scrollTop = document.body.scrollTop =0;
        }
    },
    mounted:function(){
        this.$http.get('../../../static/books.json').then((res)=>{
           // this.lookBooks=res.data.looks.slice(0,4);
            this.evalarr=res.data.evals;
            this.evalarr.forEach(val=>{
                val.star=parseInt(val.star);
            })
        })
        document.documentElement.scrollTop = document.body.scrollTop =0;
    },
    created:function(){
        Request(this);
       // this.$store.commit("setItem",this.$route.query.intends);
        this.intends=this.$route.query.intends;
        console.log(this.$route.query.intends,"intends");


    }
}
</script>

<style>
.bookCir{
    background-color:#fafafa;
    width:1000px;
    margin-top:30px;
    overflow:hidden;
    margin:0 auto;
}
</style>