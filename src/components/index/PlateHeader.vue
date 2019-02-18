<template>
    <div id="plate-header">
        <h1>{{title}}</h1>
        <p v-if="pubarr">
            <router-link to="/" v-for="(item,index) in pubarr" :key="index">{{item}} </router-link>
        </p>
    </div>
</template>
<script>
    export default{
        name:"plate-header",
        props:['title','pubarr']
    }
</script>
<style lang="css" scoped >
    #plate-header{
        width:1200px;
        margin:30px auto 20px;
        font-family:"microsoft yahei";
    }
    #plate-header h1{
        font-size:24px;
        font-weight:normal;
        text-align:center;
        line-height:30px;
        color:#333;
    }
    #plate-header p{
        font-size:14px;
        color:#888;
        line-height:30px;
        text-align:center;
    }
    #plate-header p a{
        padding:0 3px;
        color:#888;
    }
    #plate-header p a::after{
        content:" | ";
    }
    #plate-header p a:last-child::after{
        content:"";
    }
</style>