<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../assets/banner1.jpg" ></div>
            <div class="swiper-slide"><img src="../../assets/banner2.jpg" ></div>
            <div class="swiper-slide"><img src="../../assets/banner3.jpg" ></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swiper-button-black"></div>
        <div class="swiper-button-next swiper-button-black"></div>
    </div>
    <!-- 以上是轮播图片 -->
</template>
<script>

export default{
    name:"swiper",
    methods:{

    },
    mounted:function(){
        var mySwiper= new Swiper('.swiper-container',{
            loop:true,
            autoplay:5000,
            speed:600,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            pagination:'.swiper-pagination',
            paginationClickable :true
        })
    }
}
</script>
<style lang="css" scoped>
    .swiper-slide img{
        width:100%;
        display:block;
    }
    .swiper-button-black{
        opacity:0.3;
    }
    .swiper-container:hover .swiper-button-black{
        opacity:1;
    }
    .swiper-pagination-bullet-active{
        background-color:#f26552;
    }

</style>
