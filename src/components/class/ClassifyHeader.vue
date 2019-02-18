<template>
<div id="classify-header">
    <div class="genre">
        <div class="difgenre clear">
            <div class="left">频道</div>
            <div class="right">
                <ul>
                    <li :class="{'current':val.isChan}" v-for="(val,index) in channels" :key="index" @click.prevent="chanTap(index)"><router-link to="#">{{val.name}}</router-link></li>
                </ul>
            </div>
        </div>
        <div class="difgenre clear">
            <div class="left">类型</div>
            <div :class="{'right':true, 'click':clickAct}">
                <ul>
                    <li :class="{current:item.isType}" v-for="(item,key) in typeArr" :key="key" @click="typeEvent(key)"><router-link to="#" pointer-events: none>{{item.name}}</router-link></li>
                </ul>
                <span id="packUp" class="more" @click="clickUp()">
                    <i>更多</i><s></s>
                </span>
                <span id="packDown" class="more" @click="clickDown()"><i>收起</i><s></s></span>
            </div>
        </div>
        <div class="difgenre clear">
            <div class="left">其他</div>
            <div class="right">
                <ul>
                    <li class="current"><router-link to="#" pointer-events:none>全部</router-link></li>
                    <li><router-link to="#" pointer-events:none>免费</router-link><li>
                    <li><router-link to="#" pointer-events:none>特价</router-link></li>
                    <li><router-link to="#" pointer-events:none>VIP</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:'classify-header',
    data(){
        return{
            clickAct:false,
            typeArr:[
                {name:"小说"},{name:"文学"},{name:"历史"}
                ,{name:"传记"},{name:"青春"},{name:"励志"}
                ,{name:"社科"},{name:"心理"},{name:"经济"}
                ,{name:"管理"},{name:"理财"},{name:"文化"}
                ,{name:"旅游"},{name:"美食"},{name:"时尚"}
                ,{name:"健身"},{name:"孕产"},{name:"少儿"}
                ,{name:"科学"},{name:"科普"},{name:"医学"}
                ,{name:"外语"},{name:"法律"}
            ]
        }
    },
    props:['channels'],
    methods:{
        clickUp:function(){//更多
            this.clickAct=true
        },
        clickDown:function(){//收起
            this.clickAct=false
        },
        typeEvent:function(key){//点击选中【类型】中某一项
           let _this=this;
            _this.typeArr.map(function(item){
                item.isType=false
            })
            _this.typeArr[key].isType=true;
        },
        chanTap:function(index){//点击选中【出版】中某一项
            this.$emit('chancelTap',index)
        }
    },
    mounted:function(){
        let _this=this;
        _this.typeArr.map(function(item){
            _this.$set(item,'isType',false)
        })
        _this.typeArr[0].isType=true;
    }
}
</script>
<style lang="css" scoped>
#classify-header{
    width:1000px;
    overflow:hidden;
    margin:0 auto;
    padding-top:40px;
    text-align:left;
    font-family:"Microsoft yahei";
    font-size:14px;
}
.genre{
    padding:18px 46px;
    background-color:#fff;
}
.difgenre .left{
    float:left;
    width:48px;
    height:50px;
    line-height:50px;
    color:#ccc;
    display:inline-block;
}
.difgenre .right{
    width:846px;
    padding:0 0 0 6px;
    border-bottom:1px solid #f0f0f0;
    overflow:hidden;
    cursor:pointer;
}
.difgenre .right ul{
    width:786px;
    padding:6px 0;
    height:38px;
    overflow:hidden;
    float:left;
}
.difgenre .right.click ul{
    height:auto;
}
.difgenre li{
    margin-right:14px;
    padding:8px 0;
    float:left;
}
.difgenre .right a{
    display:inline-block;
    height:20px;
    line-height:20px;
    padding:0 9px;
    border:1px solid #fff;
    color:#888;
}
.difgenre li.current a{
    background-color:#9e9e9e;
    border-radius:50px;
    color:#fff;
    border:1px solid #9e9e9e;
    line-height:18px;
}
.difgenre li.current a:hover{
    border:1px solid #9e9e9e;
}
.difgenre .right a:hover{
    border:1px solid #d2d2d2;
    border-radius:50px;
}
.right .more{
    float:right;
    margin-top:14px;
    display:inline-block;
    width:40px;
    height:20px;
    line-height:20px;
    padding:0 9px;
    border:none;
}
.right .more i{
    float:left;
    font-style:normal;
    margin-right:2px;
    color:#888;
}
.right .more s{
    float:right;
    width:9px;
    height:6px;
    margin-top:7px;
    background-image:url(../../assets/listIcon.png);
    background-repeat:no-repeat;
    background-position:0 0;
}
#packDown s{
    background-position:-9px 0;
}
.right #packUp,.right.click #packDown{
    display:inline-block;
}
.right #packDown,.right.click #packUp{
    display:none;
}

</style>