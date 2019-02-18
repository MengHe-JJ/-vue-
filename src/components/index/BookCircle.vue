<template>
<div id="book-circle" class="clear">
    <div class="book-md4">
        <div class="circle-img">
            <img src="../../assets/circle01.jpg" alt="" />
        </div>
        <div class="circle-txt">
            <h3>古代言情</h3>
            <p>相望古言，相聚古言，古言—我们的家园</p>
        </div>
        <div class="circle-icon clear">
            <span class="circle-people">
                <img src="../../assets/icon-people.png" />
                30w+
            </span>
            <span class="circle-catolog">
                <img src="../../assets/icon-catalog.png" />
                32477
            </span>
        </div>
    </div>
    <div class="book-md4">
        <div class="circle-img">
            <img src="../../assets/circle02.jpg" alt="" />
        </div>
        <div class="circle-txt">
            <h3>古代言情</h3>
            <p>相望古言，相聚古言，古言—我们的家园</p>
        </div>
        <div class="circle-icon clear">
            <span class="circle-people">
                <img src="../../assets/icon-people.png" />
                30w+
            </span>
            <span class="circle-catolog">
                <img src="../../assets/icon-catalog.png" />
                32477
            </span>
        </div>
    </div>
    <div class="book-md4">
        <div class="circle-img">
            <img src="../../assets/circle03.jpg" alt="" />
        </div>
        <div class="circle-txt">
            <h3>古代言情</h3>
            <p>相望古言，相聚古言，古言—我们的家园</p>
        </div>
        <div class="circle-icon clear">
            <span class="circle-people">
                <img src="../../assets/icon-people.png" />
                30w+
            </span>
            <span class="circle-catolog">
                <img src="../../assets/icon-catalog.png" />
                32477
            </span>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        name:"book-circle"
    }
</script>
<style scoped>
#book-circle{
    width:1200px;
    margin:auto;
    background-color:#fff;
}
.book-md4{
    padding:30px;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    border-right:1px solid #ccc;
}
.book-md4:last-child{
    border-right:0;
}
.circle-img{
    width:100px;
    height:100px;
    margin:0 auto 20px;
}
.circle-img img{
    width:100px;
    height:100px;
    border-radius:50%;
}
.circle-txt {
    margin:20px 0 30px;
    padding:10px 0;
}
.circle-txt h3{
    font-size:18px;
    color:#333;
}
.circle-txt p{
    font-size:14px;
    color:#888;
}
.circle-icon{
    padding-bottom:20px;
}
.circle-people,.circle-catolog{
    color:#888;
    font-size:14px;
    line-height:22px;
    position:relative;
    display:inline-block;
}
.circle-people{
    padding-left:28px;
}
.circle-catolog{
    padding-left:28px;
    margin-left:10px;
}
.circle-people img,.circle-catolog img{
    width:auto;
    height:22px;
    position:absolute;
    display:block;
    top:0;
    left:0;
}
</style>