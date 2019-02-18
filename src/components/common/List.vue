<template>
<li v-if="item" @mouseover="plateAct(num)">
    <div class="altas-num">{{num+1}}</div>
    <div class="altas clear">
        <router-link :to="{path:'/page',query:{intends:item}}">

            <img class="altas-img" :src="item.img" alt="" />
            <div class="altas-main">
                <h3>{{item.name}}</h3>
                <p class="altas-eyes"><img src="../../assets/icon-eyes.png" />{{item.eyes}}</p>
            </div>
        </router-link>
    </div>
    <div class="altas-txt">
        <router-link :to="{path:'/page',query:{intends:item}}">{{item.name}}</router-link>
        <p class="fr altas-eyes"><img src="../../assets/icon-eyes.png" />{{item.eyes}}</p>
    </div>
</li>

</template>
<script>

export default{
    props:['item','num'],
    computed:{
    },
    methods:{
        plateAct:function(n){
            this.$emit('listTap',n)
        }
    }
}
</script>
<style>


</style>