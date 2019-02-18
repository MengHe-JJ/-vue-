<template>
    <div class="plate-half first-half" v-if="design">
        <h3>{{design.name}}<span>作者：{{design.author}}</span></h3>
        <p>{{design.desc}}</p>
        <div class="plate-img"><router-link :to="{path:'/page',query:{intends:design}}">
            <img :src="design.img" alt="" /></router-link>
        </div>
    </div>
</template>
<script>

export default{
    props:["design"]
}
</script>
<style>

</style>