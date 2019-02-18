<template>
<div class="plate-half">
    <div class="plate-md6" v-for="(item,key) in studyarr" :key="key">
        <router-link :to="{path:'/page',query:{intends:studyarr[key]}}">
            <img :src="item.img" alt="" />
            <h3>{{item.name}}</h3>
            <p>{{item.author}}</p>
        </router-link>
    </div>
</div>

</template>
<script>

export default{
    props:['studyarr']

}
</script>
<style lang="css" scoped>
@import "../../assets/css/list.css";
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