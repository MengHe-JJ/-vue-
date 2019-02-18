<template>
    <div id="classify">
        <index-header :nowIndex="1"></index-header>
        <classify-header :channels="chanArr" @chancelTap="chanClick"></classify-header>
        <classify-con :showarr="bookAll"></classify-con>
        <common-footer></common-footer>
    </div>
</template>
<script>
import IndexHeader from '../components/IndexHeader'
import ClassifyHeader from '../components/class/ClassifyHeader'
import ClassifyCon from '../components/class/ClassifyCon'
import CommonFooter from '../components/CommonFooter'
import {Request} from '../util/common.js'

export default{
    name:'classify',
    data:()=>{
        return{
            bookAll:[],
            chanArr:[{name:'出版',isChan:true},{name:'男频',isChan:false},{name:'女频',isChan:false}],
            id:0
        }
    },
    components:{
        IndexHeader,
        ClassifyHeader,
        ClassifyCon,
        CommonFooter
    },
    computed:{
        barr:function(){
            return this.$store.state.bookarr
        },
        yarr:function(){
            return this.$store.state.boyarr
        },
        garr:function(){
            return this.$store.state.girlarr
        }
    },
   watch:{
        id:function(newVal,old){
            if(newVal==0){
                this.bookAll=this.barr;
            }else if(newVal==1){
                this.bookAll=this.yarr;
            }else if(newVal==2){
                this.bookAll=this.garr;
            }
        }
   },
    methods:{
        chanClick:function(index){
            this.id=index;
            console.log(index)
            this.chanArr.map(function(item){
                item.isChan=false;
            })
            this.chanArr[index].isChan=true;
        }
    },
    mounted:function(){
        this.$http.get('../../../static/books.json').then((res)=>{
                this.bookAll=res.data.books;
        })

    },
    created:function(){
        Request(this);
    }
}
</script>
<style>

</style>