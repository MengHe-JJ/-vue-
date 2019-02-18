<template>
<div class="plate-half">
    <div class="plate-md6" v-for="(item,key) in studyarr" :key="key">
        <router-link :to="{path:'/page',query:{intends:studyarr[key]}}">
            <h3>{{item.name}}</h3>
            <p class="name">{{item.author}}</p>
            <p class="introduce">{{item.desc}}</p>
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
    padding:28px 18px 28px;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    overflow:hidden;
    border-bottom:1px solid #ccc;
}
.plate-md6:nth-child(odd){
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
.plate-md6:nth-child(even){
    border-bottom:1px solid #ccc;
}
.plate-md6:last-child{
    border:none;
}
.plate-md6:nth-child(5){
    border-bottom:none;
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
    border-bottom:1px solid #f0f0f0;
    padding-bottom:4px;
    line-height:20px;
    white-space:nowrap;
    text-overflow:ellipsis;
    color:#333;
    text-align:left;
}
.plate-md6 p{
    font-size:14px;
    color:#888;
}
.plate-md6 p.name{
    margin:8px 0 10px;
    line-height:20px;
    white-space:nowrap;
    overflow:hidden;
    text-align:left;
    height:20px;
}
.plate-md6 p.introduce{
    overflow:hidden;
    height:63px;
    display:-webkit-box;
    line-height:16px;
    text-overflow:ellipsis;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
    text-align:left;
}


</style>